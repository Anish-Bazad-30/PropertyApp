import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
})
export class AgentProfileComponent implements OnInit{
  userName: string = 'Mayank Singh';
  email: string = 'mayanksingh23@gmail.com';
  phone: string = '9999999999';
  serviceType: string = 'Electrical';


   constructor(private router: Router, private agentProfileManagementService: AgentProfileManagementService) {}
   ngOnInit(): void {

    const profileData = {
      name:this.userName,
      contactInfo: {
        email: this.email,
        phone: this.phone,
      },
      service: this.serviceType,
    };

    this.agentProfileManagementService.createAgentProfile(profileData).subscribe((res) => {
      console.log(res);
    })
  }


    editDetails() {
    alert('Edit Details button clicked!');
  }

  applyToOfferServices() {
    alert('Apply to Offer Services button clicked!');
  }

  updateDetails(){
    const profileData = {
      name: this.userName,
      contactInfo: {
        email: this.email,
        phone: this.phone,
      },
      service: this.serviceType,
    };

    const agentId ='123';
    this.agentProfileManagementService.updateAgentProfile(agentId, profileData).subscribe((res) => {
      console.log(res);
    }
    );

  }
}
