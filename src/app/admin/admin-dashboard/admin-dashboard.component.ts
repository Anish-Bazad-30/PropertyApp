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
    'user-agent': 'admin/profile-management',
    'property': 'admin/property-management',
    'vendor': 'admin/service-management',
    'referral': 'admin/referral-management',
    'statistics': 'admin/app-usage-statistic'
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
