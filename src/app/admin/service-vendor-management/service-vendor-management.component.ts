import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorServicesService } from 'src/app/services/vendor-services.service';

@Component({
  selector: 'app-service-vendor-management',
  templateUrl: './service-vendor-management.component.html',
  styleUrls: ['./service-vendor-management.component.scss']
})
export class ServiceVendorManagementComponent implements OnInit {
  searchText: string = '';
vendorList: any[] = [];              // full list
filteredVendorList: any[] = [];      // filtered list for display
itemsPerPage = 10;
currentPage = 1;
  constructor(
    private router: Router,
    private vendorService: VendorServicesService
  ) { }
  ngOnInit(): void {
    this.fetchAllServices();
  }
  addNew() {

    this.router.navigate(['/admin/add-services'])
  }

  editService(service: any): void {
    this.router.navigate(['/admin/edit-services']);
    this.vendorService.setVendorData(service);
  }

  deleteService(serviceId: any): void {
    this.vendorService.deleteServiceById(serviceId).subscribe((res) => {
      this.fetchAllServices();
    })
  }
  filterVendorList() {
    const search = this.searchText.toLowerCase().trim();
    this.filteredVendorList = this.vendorList.filter(item =>
      (item.serviceType?.toLowerCase().includes(search) || '') ||
      (item.agentFirmName?.toLowerCase().includes(search) || '')
    );
    this.currentPage = 1;
  }
  
  get paginatedBatches() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredVendorList.slice(start, start + this.itemsPerPage);
  }
  
  getTotalPages(): number {
    return Math.ceil(this.filteredVendorList.length / this.itemsPerPage);
  }
  
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }




  fetchAllServices() {
    this.vendorService.getServices().subscribe((res: any) => {
      this.vendorList = res.data || [];
      this.filteredVendorList = [...this.vendorList];
      this.currentPage = 1;
    });
  }
}