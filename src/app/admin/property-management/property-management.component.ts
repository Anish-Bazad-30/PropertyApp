import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent implements OnInit {
  searchTerm: string = '';
  
  properties = [
    { name: 'Sarah Homes', address: 'Sector 37 (Gurgaon)', status: 'Active', owner: 'Sarah Group' },
    { name: 'Sarah Homes', address: 'Sector 37 (Gurgaon)', status: 'Sold', owner: 'Sarah Group' },
    { name: 'Sarah Homes', address: 'Sector 37 (Gurgaon)', status: 'Active', owner: 'Sarah Group' },
    { name: 'Sarah Homes', address: 'Sector 37 (Gurgaon)', status: 'Sold', owner: 'Sarah Group' },
    { name: 'Sarah Homes', address: 'Sector 37 (Gurgaon)', status: 'Active', owner: 'Sarah Group' },
  ];

  filteredProperties = [...this.properties];
vendor: any;

  
  constructor() {}

  ngOnInit(): void {}

  updateSearchTerm(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredProperties = this.properties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTerm) ||
        property.address.toLowerCase().includes(searchTerm) ||
        property.owner.toLowerCase().includes(searchTerm)
    );
  }
    confirmDelete(property: any) {
    const confirmation = window.confirm("Are you sure you want to delete this property?");
    if (confirmation) {
      this.properties = this.properties.filter(p => p !== property);
      this.filteredProperties = this.filteredProperties.filter(p => p !== property);
      alert("Property deleted successfully!");
}
    }
  }
