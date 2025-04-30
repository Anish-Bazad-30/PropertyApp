import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-referral-management',
  templateUrl: './referral-management.component.html',
  styleUrls: ['./referral-management.component.scss'],
})
export class ReferralManagementComponent implements OnInit {
  searchText: string = '';
  currentPage=1;
  itemsPerPage =10;
 
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
  get referlistview() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.userList.slice(startIndex, startIndex + this.itemsPerPage);
  }
 
  getTotalPages(): number {
    return Math.ceil(this.userList.length / this.itemsPerPage);
  }
 
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
}
 
 