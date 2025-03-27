import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-vendor-management',
  templateUrl: './service-vendor-management.component.html',
  styleUrls: ['./service-vendor-management.component.scss']
})
export class ServiceVendorManagementComponent implements OnInit {

  vendors: any[] = [];
  filteredVendors: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors(): void {
    this.vendors = [
      { name: 'A K Enterprise', agent: 'Agent A', category: 'Plumbing', contact: '99999999', status: 'Active' },
      { name: 'B K Services', agent: 'Agent B', category: 'Electrical', contact: '88888888', status: 'Active' },
      { name: 'C K Solutions', agent: 'Agent C', category: 'Cleaning', contact: '77777777', status: 'Inactive' },
      { name: 'D K Suppliers', agent: 'Agent D', category: 'Painting', contact: '66666666', status: 'Active' },
      { name: 'E K Suppliers', agent: 'Agent D', category: 'Painting', contact: '66666666', status: 'Active' },
      { name: 'F K Suppliers', agent: 'Agent D', category: 'Painting', contact: '66666666', status: 'Active' },
      { name: 'F K Suppliers', agent: 'Agent D', category: 'Painting', contact: '66666666', status: 'Active' },
      { name: 'F K Suppliers', agent: 'Agent D', category: 'Painting', contact: '66666666', status: 'Active' }
    ];

    this.filteredVendors = [...this.vendors];
  }

  updateSearchTerm(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredVendors = this.vendors.filter(vendor =>
      vendor.name.toLowerCase().includes(searchTerm) ||
      vendor.agent.toLowerCase().includes(searchTerm) ||
      vendor.category.toLowerCase().includes(searchTerm) ||
      vendor.contact.includes(searchTerm) ||
      vendor.status.toLowerCase().includes(searchTerm)
    );
  }
  confirmDelete(vendor: any) {
    const confirmation = window.confirm("Are you sure you want to delete this vendor?");
    if (confirmation) {
      this.vendors = this.vendors.filter(p => p !== vendor);
      this.filteredVendors = this.filteredVendors.filter(p => p !== vendor);
      alert("Vendor deleted successfully!");
}
    }
}
