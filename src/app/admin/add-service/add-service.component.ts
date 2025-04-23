import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent  implements OnInit {

   serviceForm!: FormGroup;
    serviceTypes: string[] = ['Electrical', 'Plumbing', 'Carpentry'];
  
  
    constructor(
      private vendorServices: VendorServicesService,
      private fb: FormBuilder
    ) { }
  
    ngOnInit(): void {
      this.serviceForm = this.fb.group({
        serviceType: ['', Validators.required],
        agentFirmName: ['', Validators.required],
        amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      });
    }
  
    addService(): void {
      if (this.serviceForm.valid) {
        const serviceData = this.serviceForm.value;
        this.vendorServices.postServices(serviceData).subscribe((res) => {
          console.log(res);
  
        })
  
      } else {
        this.serviceForm.markAllAsTouched(); // show validation errors
      }
    }
  
    onlyDigits(event: KeyboardEvent) {
      const charCode = event.key.charCodeAt(0);
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    }
  }
  
  
  
