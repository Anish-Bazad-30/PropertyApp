import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.scss'],
})
export class ServiceListingComponent  implements OnInit {

  serviceForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.serviceForm = this.fb.group({
      serviceName : ['', Validators.required],
      serviceDescription : ['', Validators.required],
      pricing : ['', Validators.required],
      agentId : [{value : '110021', disabled : true}]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.serviceForm.valid) {
      console.log('Form Data:', this.serviceForm.getRawValue());
      alert('Service submitted for review!');
      this.serviceForm.reset();

    }
  }
  onCancel() {
    this.router.navigate(['/home']);
  }

}
