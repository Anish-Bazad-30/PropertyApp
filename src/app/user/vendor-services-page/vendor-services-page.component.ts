import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './vendor-services-page.component.html',
  styleUrls: ['./vendor-services-page.component.scss']
})
export class VendorServicesPageComponent implements OnInit {
  constructor() {}

  categories: string[] = ['Plumbing', 'Electrical'];

  services = [
    { title: 'SMT Enterprise', category: 'Plumbing', agent: 'Agent Name', amount: '₹25,000' },
    { title: 'SMT Enterprise', category: 'Plumbing', agent: 'Agent Name', amount: '₹25,000' },
    { title: 'SMT Enterprise', category: 'Electrical', agent: 'Agent Name', amount: '₹25,000' },
    { title: 'SMT Enterprise', category: 'Electrical', agent: 'Agent Name', amount: '₹25,000' }
  ];

  filteredServices = [...this.services];

  ngOnInit(): void {
    this.filteredServices = [...this.services];
  }

  // Get services based on category
  getServicesByCategory(category: string) {
    return this.filteredServices.filter(service => service.category === category);
  }

  // Handle category change
  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.filteredServices = selectedCategory === 'all'
      ? [...this.services]
      : this.services.filter(service => service.category === selectedCategory);
  }

  // Call Agent method
  callAgent(): void {
    alert('Calling now...');
  }
}