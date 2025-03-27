import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-profile-management',
  templateUrl: './user-profile-management.component.html',
  styleUrls: ['./user-profile-management.component.scss'],
})
export class UserProfileManagementComponent  implements OnInit {
  name: string = 'Ankit Kumar';
  email: string = 'ankit23@gmail.com';
  role: string = 'User';
  profileForm: FormGroup<any> | undefined;

  data = {
    "id": "1",
    "name": "Ankit Kumar",
    "email": "ankit23@gmail.com",
    "role": "User"
  }  

  constructor(private router: Router, private fb: FormBuilder, private userProfileManagementService: UserProfileManagementService) { }

  ngOnInit(): void {
    
    this.fetchUserData();
  }

  fetchUserData(){

  }
  goBack() {
    this.router.navigate(['/previous-page']); 
  }

  applyForAgent() {
    alert('Agent application submitted!');
    this.role = 'Agent Pending'; // Update role
  }
 
  updateProfile() {
    this.userProfileManagementService.updateProfile("1", this.data).subscribe((res) => {
      console.log(res);
    })
  }

  submitApplication() {
    console.log('Application submitted successfully!');
  }
}
