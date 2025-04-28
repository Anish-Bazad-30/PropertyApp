import { Component, OnInit } from '@angular/core';
import { VendorServicesService } from 'src/app/services/vendor-services.service';


@Component({
  selector: 'app-services',
  templateUrl: './vendor-services-page.component.html',
  styleUrls: ['./vendor-services-page.component.scss']
})
export class VendorServicesPageComponent implements OnInit {
  constructor(
    private vendorServices : VendorServicesService
  ) {}

  services: any[] = [];
  selectedCategory: string = 'all';
viewAllCategory: string | null = null; // keeps track of which category's "View All" is clicked
categories: string[] = ['Health', 'Plumbing', 'Electrician']; // example categories

  filteredServices = [...this.services];

  ngOnInit(): void {
    this.filteredServices = [...this.services];
    this.getServices();
  }


  getServices(){
    this.vendorServices.getServices().subscribe((res:any)=>{
      console.log(res);
      this.services = res.data;

      // Extract unique categories
      this.categories = [...new Set(this.services.map(service => service.serviceType))];
    })
  }

  // Get services based on category
  getServicesByCategory(category: string) {
    const filtered = this.services
      .filter(service => service.serviceType === category)
      .map(service => ({
        title: service.serviceType,
        agent: service.agentFirmName,
        amount: service.amount,
        mobileNumber: service.mobileNumber
      }));
  
    return this.viewAllCategory === category ? filtered : filtered.slice(0, 3);
  }
  
  
  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.viewAllCategory = null; // reset viewAll state when category changes
  }
  callAgent(mobileNumber:any): void {
    // console.log(mobileNumber);
    
    window.open(`tel:${mobileNumber}`, '_system');
  }

  shouldShowCategory(category: string): boolean {
    if (this.viewAllCategory) {
      return this.viewAllCategory === category;
    }
    return this.selectedCategory === 'all' || this.selectedCategory === category;
  }

  viewAll(category: string) {
    this.viewAllCategory = category;
  }
}