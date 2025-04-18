import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent  implements OnInit {
  constructor (private router : Router) {}
 
  ngOnInit() {}
  private routeMap: { [key: string]: string } = {
    'user-agent': '/profile-management',
    'property': '/property-management',
    'vendor': '/service-management',
    'referral': '/referral-management',
    'statistics': '/app-usage-statistic'
  };
 
  navigateTo(key: string) {
    const route = this.routeMap[key];
    if (route) {
      this.router.navigate([route]);
    } else {
      console.warn('Route not found for:', key);
    }
  }
 
}
