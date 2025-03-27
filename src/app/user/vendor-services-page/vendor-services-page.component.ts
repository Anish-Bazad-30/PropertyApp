import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './vendor-services-page.component.html',
  styleUrls: ['./vendor-services-page.component.scss']
})
export class VendorServicesPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.filteredServices = [...this.services];
    console.log('Filtered Services Initialized:', this.filteredServices);
  }

  // Categories for the dropdown
  categories: string[] = ['Plumbing', 'Electrical', 'AC Servicing', 'Painting'];

  // All services data
  services = [
    {
      title: 'Plumbing Work',
      description: 'Fix your plumbing issues.',
      category: 'Plumbing',
      image: 'assets/images/plumbing.jpeg'
    },
    {
      title: 'Electrical Work',
      description: 'Solve electrical problems.',
      category: 'Electrical',
      image: 'assets/images/electrical.jpg'
    },
    {
      title: 'AC Servicing',
      description: 'Maintain and repair AC units.',
      category: 'AC Servicing',
      image: 'assets/images/split-ac.jpg'
    },
    {
      title: 'Painting Work',
      description: 'Professional painting services.',
      category: 'Painting',
      image: 'assets/images/painting.jpeg'
    }
  ];

  // Filtered services to display
  filteredServices = [...this.services];

  // Handle category change
  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;

    if (selectedCategory === 'all') {
      this.filteredServices = [...this.services];
    } else {
      this.filteredServices = this.services.filter(
        (service) => service.category === selectedCategory
      );
    }
  }
    // Call Agent method
    callAgent(): void {
      alert('Calling now...');
    }
}
