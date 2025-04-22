import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss'],
})
export class EditServiceComponent implements OnInit {
  serviceForm!: FormGroup;
  serviceTypes: string[] = ['Cleaning', 'Plumbing', 'Electrical']; // example values
  serviceId!:any;
  serviceData: any = {};

  constructor(
    private fb: FormBuilder,
    private vendorService: VendorServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      serviceType: ['', Validators.required],
      agentFirmName: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      userId: ['']
    });

    this.route.queryParams.subscribe(params => {
      this.serviceData = {
        id: params['id'],
        serviceType: params['serviceType'],
        agentFirmName: params['agentFirmName'],
        amount: params['amount'],
        userId: params['userId']
      };
      console.log('Received service data from query params:', this.serviceData);
      this.serviceForm.patchValue(this.serviceData);
      this.serviceId = this.serviceData.id;
    });
  }

  saveService(): void {
    if (this.serviceForm.valid) {


    const serviceData = this.serviceForm.value;
    console.log(this.serviceForm.value);
    
    this.vendorService.updateServiceById(this.serviceId,serviceData).subscribe((res)=>{

    })

  }else {
    this.serviceForm.markAllAsTouched(); // To show validation errors
  }
  }
  cancel(): void {
    this.serviceForm.reset();

  }
}


