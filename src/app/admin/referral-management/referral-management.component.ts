import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-management',
  templateUrl: './referral-management.component.html',
  styleUrls: ['./referral-management.component.scss'],
})
export class ReferralManagementComponent implements OnInit {
  referrals: any[] = [];
  totalReferrals: number = 0;
  successfulReferrals: number = 0;
  pendingReferrals: number = 0;
  totalRevenue: number = 0;
  conversionRate: number = 0;
  searchTerm: string = '';

  constructor() {}

  ngOnInit() {
    this.loadReferralData();
  }

  /**
   * Load referral data (mock data for now)
   */
  loadReferralData() {
    this.referrals = [
      { id: '101D4', referrerId: 234, refereeId: 136, link: 'rajpal/NK', status: 'Successful', earning: 37, date: '17-02-25' },
      { id: '101D5', referrerId: 235, refereeId: 137, link: 'rajpal/DX', status: 'Successful', earning: 37, date: '17-02-25' },
      { id: '101D6', referrerId: 236, refereeId: 138, link: 'rajpal/ZX', status: 'Successful', earning: 37, date: '17-02-25' },
      { id: '101D7', referrerId: 237, refereeId: 139, link: 'rajpal/QW', status: 'Pending', earning: 0, date: '17-02-25' },
      { id: '101D7', referrerId: 237, refereeId: 139, link: 'rajpal/QW', status: 'Pending', earning: 0, date: '17-02-25' },
    ];
    

    // Calculate summary statistics
    this.totalReferrals = this.referrals.length;
    this.successfulReferrals = this.referrals.filter(ref => ref.status === 'Successful').length;
    this.pendingReferrals = this.referrals.filter(ref => ref.status === 'Pending').length;
    this.totalRevenue = this.referrals.reduce((sum, ref) => sum + ref.earning, 0);
    this.conversionRate = Math.round((this.successfulReferrals / this.totalReferrals) * 100);
  }

  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
  }

  get filteredReferrals() {
    if (!this.searchTerm) {
      return this.referrals;
    }
    return this.referrals.filter(referral =>
      Object.values(referral).some(value =>
        String(value).toLowerCase().includes(this.searchTerm) // FIXED: Casting value to string
      )
    );
  }
}
