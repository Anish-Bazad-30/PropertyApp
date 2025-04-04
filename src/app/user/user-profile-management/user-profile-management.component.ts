import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-profile-management',
  templateUrl: './user-profile-management.component.html',
  styleUrls: ['./user-profile-management.component.scss'],
})
export class UserProfileManagementComponent implements OnInit {
  name: string = 'ankit@103';
  email: string = 'ankit23@gmail.com';
  mobileNumber: string = '1234567890';
  role: string = 'User';

  profileForm: FormGroup<any> | undefined;

  data = {
    // "id": "1",
    "name": "ankit@103",
    "username": "agent2",
    "email": "ankit23@gmail.com",
    "mobilenumber": "1234567890",
    "role": "User"
  }  


  constructor(private router: Router, private fb: FormBuilder, private userProfileManagementService: UserProfileManagementService) {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    const userId = "67e6760b3e7baa2013db10b3"; //agent 2.. Needs to change dynamically in future.

    this.userProfileManagementService.fetchUserData(userId).subscribe((res) => {
      console.log(res);
    });
  }

  goBack() {
    this.router.navigate(['/previous-page']);
  }

  applyForAgent() {
    alert('Application to become an agent submitted!');
    this.role = 'Agent Pending'; // Updating role to show "Agent Pending"
  }
  updateProfile() {
    this.userProfileManagementService.updateProfile("67e6760b3e7baa2013db10b3", this.data).subscribe((res) => {
      console.log(res);
    })
  }


  // updateProfile() {
  //   alert('Profile updated successfully!');
  // }
}
