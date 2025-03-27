import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agent-user-edit',
  templateUrl: './agent-edit.component.html',
  styleUrls: ['./agent-edit.component.scss'],
})
export class AgentEditComponent  implements OnInit {
  agent = {
    name: 'Agent A',
    email: 'agenta@gmail.com',
    status: 'Active',
    referralLink: 'https://rajpal/agenta',
    totalReferrals: 4,
    servicesTaken: ['Plumbing', 'Electrical']
  };
  constructor() { }

  ngOnInit() {}

  edit() {
    // Add edit functionality here
    console.log('Edit button clicked');
  }

  cancel() {
    // Add cancel functionality here
    console.log('Cancel button clicked');
  }
}
