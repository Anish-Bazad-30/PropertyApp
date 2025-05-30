import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleFinaliseService } from 'src/app/services/sale-finalise.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss'],
})
export class BuyerDetailsComponent implements OnInit {
  saleForm!: FormGroup;
  propertyData: any;

  constructor(private fb: FormBuilder,
    private finaliseSaleService: SaleFinaliseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.saleForm = this.fb.group({
      username: ['', [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10),
        Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      salePrice: ['', [Validators.required]],
      saleDate: ['', [Validators.required]],
      propertyName: [''], // from passed data
      userId: [''],
      propertyId: ['']
    });

  }

  markSaleComplete() {
    if (this.saleForm.valid) {

      this.finaliseSaleService.getPropertyData().subscribe((data) => {
        if (data) {
          this.propertyData = data;
          console.log('Received property data:', this.propertyData);

          // Optionally you can patch your form here
          this.saleForm.patchValue({
            propertyName: this.propertyData.propertyName,
            userId: this.propertyData.userId,
            propertyId: this.propertyData.id
          });
        }
      });
      const formData = this.saleForm.value;
      console.log('Form Submitted!', formData);

      this.finaliseSaleService.finaliseSale(formData).subscribe({
        next: (res) => {
          console.log('Sale finalized successfully:', res);
          this.saleForm.reset();
          this.router.navigate(['/agent/landing-page'])
        },
        error: (err) => {
          console.error('Error finalizing sale:', err);
        }
      });

    } else {
      console.error('Form is invalid');
      this.saleForm.markAllAsTouched();
    }
  }

  onlyDigits(event: KeyboardEvent): void {
    const inputChar = event.key;
    if (!/^\d$/.test(inputChar)) {
      event.preventDefault();
    }
  }
}

