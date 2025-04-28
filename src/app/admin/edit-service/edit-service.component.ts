import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss'],
})
export class EditServiceComponent implements OnInit {

  form !: FormGroup;
  serviceTypes = ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry'];

  constructor(
    private vendorService: VendorServicesService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [''],
      userId: [''],
      serviceType: ['', Validators.required],
      agentFirmName: [''],
      amount: [, Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });

    this.vendorService.vendorData$.subscribe(data => {
      this.form.patchValue({
        id: data.id,
        userId: data.userId,
        agentFirmName: data.agentFirmName,
        serviceType: data.serviceType,
        amount: data.amount,
        mobileNumber: data.mobileNumber
      });
    });
  }

  saveService(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.vendorService.updateServiceById(formData.id,formData).subscribe((res)=>{
        this.router.navigate(['/admin/service-management']);
      })
    }
  }
  cancel(): void {
  }
}


