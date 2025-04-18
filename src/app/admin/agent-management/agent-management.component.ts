import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.scss'],
})
export class AgentManagementComponent  implements OnInit {
  agentList: any[] = [];
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentList = [
      {
        username: 'ankith@033',
        mobile: '1234567890',
        status: 'Pending',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        status: 'Pending',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        status: 'Pending',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        status: 'Pending',
        profilePic: 'assets/images/image1.png'
      },
      {
        username: 'ankith@033',
        mobile: '1234567890',
        status: 'Pending',
        profilePic: 'assets/images/image1.png'
      }
    ];
  }

  addNew(): void {}

  editAgent(agent: any): void {
    console.log('Editing agent:', agent);
  }

  deleteAgent(agent: any): void {
    console.log('Deleted agent:', agent);
  }

  }
