import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-service-vendor-management',
  templateUrl: './service-vendor-management.component.html',
  styleUrls: ['./service-vendor-management.component.scss']
})
export class ServiceVendorManagementComponent implements OnInit {
  searchText: string = '';
   
   vendorList = [
     {
       username: 'mayank@singh',
       serviceType: 'Plumbing',
       serviceAmount: '₹ 25,000'
     },
     {
       username: 'mayank@singh',
       serviceType: 'Plumbing',
       serviceAmount: '₹ 25,000'
     },
     {
       username: 'mayank@singh',
       serviceType: 'Plumbing',
       serviceAmount: '₹ 25,000'
     },
     {
       username: 'mayank@singh',
       serviceType: 'Plumbing',
       serviceAmount: '₹ 25,000'
     },
     {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    },
    {
      username: 'mayank@singh',
      serviceType: 'Plumbing',
      serviceAmount: '₹ 25,000'
    }
   ];
   service: any;
   currentPage = 1;
   itemsPerPage = 10;
   constructor(
     private router: Router
   ) {}
   ngOnInit(): void {
       
   }
   addNew(){
     console.log("Add New Vendor clicked");
   }
 
   editService(service: any): void {
     this.router.navigate(['/admin/edit-service'])
   }
 
   deleteService(service: any): void {
     console.log('Delete clicked for:', service);
     }
   
 
 
   get paginatedBatches() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.vendorList.slice(startIndex, startIndex + this.itemsPerPage);
  }
 
  getTotalPages(): number {
    return Math.ceil(this.vendorList.length / this.itemsPerPage);
  }
 
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
}