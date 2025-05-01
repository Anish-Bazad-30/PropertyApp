import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.scss'],
})
export class ServiceListingComponent implements OnInit {

  services: any[] = [];
  userId: any;

  constructor(private fb: FormBuilder, private router: Router,
    private vendorService: VendorServicesService,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);
    this.loadServices();
  }

  loadServices(): void {


    this.vendorService.getServicesByAgentId(this.userId).subscribe({
      next: (res: any) => {
        this.services = res.data;
      },
      error: (err) => {
        if (err.status === 404) {
          this.services = []; // clear services
        }
        console.error('Error loading services:', err);
      }
    });
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
    this.vendorService.deleteServiceById(serviceId).subscribe((res) => {
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


