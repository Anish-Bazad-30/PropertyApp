import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-analytics',
  templateUrl: './app-analytics.component.html',
  styleUrls: ['./app-analytics.component.scss'],
})
export class AppUsageAnalyticsComponent implements OnInit {
  totalUsers: number = 10;
  activeUsers: string = '13/16/19';
  totalPropertyViews: number = 6;
  totalSuccessfulReferrals: number = 9;
  agentListingsAdded: number = 35;
  searchTerm: string = '';

  users: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.users = [
      { id: '#341', lastActive: '10-02-25 08:20', propertiesViewed: 3, referralsMade: 4, agentListingsAdded: 2 },
      { id: '#341', lastActive: '09-02-25 08:20', propertiesViewed: 3, referralsMade: 4, agentListingsAdded: 2 },
      { id: '#341', lastActive: '08-02-25 08:20', propertiesViewed: 3, referralsMade: 4, agentListingsAdded: 2 },
      { id: '#341', lastActive: '07-02-25 08:20', propertiesViewed: 3, referralsMade: 4, agentListingsAdded: 2 },
    ];
  }

  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
  }

  get filteredUsers() {
    if (!this.searchTerm) {
      return this.users;
    }
    return this.users.filter(user =>
      Object.values(user).some(value =>
        String(value).toLowerCase().includes(this.searchTerm)
      )
    );
  }
}
