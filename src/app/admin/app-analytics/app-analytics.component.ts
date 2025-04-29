import { Component, OnInit } from '@angular/core';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';

@Component({
  selector: 'app-usage-analytics',
  templateUrl: './app-analytics.component.html',
  styleUrls: ['./app-analytics.component.scss'],
})
export class AppUsageAnalyticsComponent implements OnInit {
  searchText: string = '';

  agentList: any[] = [];
  userId!: string;

  constructor(
    private propertyService: PropertyUploadFormService,
  ) { }

  ngOnInit(): void {
    // this.fetchData();
  }

  fetchData() {
    const storedUserId = sessionStorage.getItem('userId');

    this.userId = storedUserId !== null ? storedUserId : '';

    if (this.userId) {
      this.propertyService.fetchAllAgentPropertyForStatics(this.userId).subscribe({
        next: (res) => {
          this.agentList = res.data;
        },
        error: (error) => {
          console.error('Error fetching agent properties:', error);
        }
      });
    } else {
      console.warn('No userId found in localStorage.');
    }
  }
}
