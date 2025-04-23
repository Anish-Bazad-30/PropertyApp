import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss'],
})
export class EditServiceComponent  implements OnInit {

  serviceTypes: string[] = ['Electrical', 'Plumbing', 'Carpentry'];
  serviceType: string = '';
  agentFirmName: string = '';
  amount: string = '';

  constructor() { }

  ngOnInit(): void {}

    saveService(): void {
      if (!this.serviceType || !this.agentFirmName || !this.amount) {
        return;
      }
      
  
      const serviceData = {
        serviceType: this.serviceType,
        agentFirmName: this.agentFirmName,
        amount: this.amount
      };
  
      console.log('Saved Service:', serviceData);
  }
  cancel(): void {
    this.serviceType = '';
    this.agentFirmName = '';
    this.amount = '';
}
}


