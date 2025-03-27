import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent  implements OnInit {
  user = {
    name: 'User A',
    email: 'usera@gmail.com',
    status: 'Active',
    referralLink: 'https://rajpal/usera',
    totalReferrals: 4,
    servicesTaken: ['Plumbing', 'Electrical']
  };

  constructor() { }

  ngOnInit() {}

  edit() {
    console.log('Edit button clicked');
  }

  cancel() {
    console.log('Cancel button clicked');
  }
}
