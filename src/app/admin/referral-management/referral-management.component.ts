import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-referral-management',
  templateUrl: './referral-management.component.html',
  styleUrls: ['./referral-management.component.scss'],
})
export class ReferralManagementComponent implements OnInit {
  searchText: string = '';
 
  userList = [
    {
      username: 'ankit@103',
      referralLink: 'https://referralXZ=15',
      totalReferrals: '45',
      earnings: '25,000'
    },
    {
      username: 'ankit@103',
      referralLink: 'https://referralXZ=15',
      totalReferrals: '45',
      earnings: '25,000'
    },
    {
      username: 'ankit@103',
      referralLink: 'https://referralXZ=15',
      totalReferrals: '45',
      earnings: '25,000'
    },
    {
      username: 'ankit@103',
      referralLink: 'https://referralXZ=15',
      totalReferrals: '45',
      earnings: '25,000'
    },
  ];
 
  constructor() {}
 
  ngOnInit(): void {
  }
 
}
 
 