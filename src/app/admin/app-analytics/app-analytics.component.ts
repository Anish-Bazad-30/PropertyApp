import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-analytics',
  templateUrl: './app-analytics.component.html',
  styleUrls: ['./app-analytics.component.scss'],
})
export class AppUsageAnalyticsComponent implements OnInit {
  searchText: string = '';
  
  agentList = [
    {
      agentName: 'ankit@103',
      propertiesListed: '15',
      propertyViews: '150',
      salesFinalized: '10'
    },
    {
      agentName: 'ankit@103',
      propertiesListed: '15',
      propertyViews: '150',
      salesFinalized: '10'
    },
    {
      agentName: 'ankit@103',
      propertiesListed: '15',
      propertyViews: '150',
      salesFinalized: '10'
    },
    {
      agentName: 'ankit@103',
      propertiesListed: '15',
      propertyViews: '150',
      salesFinalized: '10'
    },
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
