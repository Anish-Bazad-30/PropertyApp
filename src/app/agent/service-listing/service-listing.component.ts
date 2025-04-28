import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.scss'],
})
export class ServiceListingComponent  implements OnInit {

  services: any[] = [];
  userId: any;

  constructor(private fb: FormBuilder, private router: Router,
    private vendorService : VendorServicesService
  ) { 
  }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    // const storedUserId = localStorage.getItem('userId');
    // this.userId = storedUserId !== null ? storedUserId : '';
    const storedUserId = sessionStorage.getItem('userId');
this.userId = storedUserId !== null ? storedUserId : '';
    this.vendorService.getServicesByAgentId(this.userId).subscribe((res:any)=>{
      console.log(res);
      this.services = res.data;
    })
  }

  editService(service: any): void {
    this.router.navigate(['/agent/edit-service'], {
      queryParams: {
        id: service.id,
        serviceType: service.serviceType,
        agentFirmName: service.agentFirmName,
        amount: service.amount,
        userId: service.userId 
      }
    });
  }

  deleteService(serviceId: any): void {
    this.vendorService.deleteServiceById(serviceId).subscribe((res)=>{
      console.log("aadsdsadsa");
      
      this.loadServices();
    })
  }

  addService(): void {
    this.router.navigate(['agent/add-service']);
  }

  goBack(): void {
    console.log('Back clicked');
  }

  openMenu(): void {
    console.log('Menu clicked');
  }
}
  

 