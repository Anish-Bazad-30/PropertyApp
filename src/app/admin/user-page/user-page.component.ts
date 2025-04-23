import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  username: string = '';
    role: string = '';
    userId: string = "";
  
    profileForm!: FormGroup;
    constructor(private router: Router, private fb: FormBuilder, private userProfileManagementService: UserProfileManagementService) { }
  
    ngOnInit(): void {
  
      this.profileForm = this.fb.group({
        username: [{ value: '', disabled: true }],
        email: ['', [Validators.required, Validators.email]],
        mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        role: [{ value: '', disabled: true }]
      });
      this.fetchUserData();
    }
  
  
    fetchUserData() {
      const storedUserId = localStorage.getItem('userId');
  
      this.userId = storedUserId !== null ? storedUserId : '';
      this.userProfileManagementService.fetchUserData(this.userId).subscribe((res) => {
        console.log(res);
        this.profileForm.patchValue({
          username: res.data.username,
          email: res.data.email,
          mobilenumber: res.data.mobilenumber,
          role: res.data.role
        });
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
      if (this.profileForm.valid) {
        const formData = this.profileForm.getRawValue();
        console.log(formData);
  
        this.userProfileManagementService.updateProfile(formData).subscribe((res) => {
          console.log(res);
        })
      }else {
        console.log('Form is invalid');
      }
    }
  
    onlyDigits(event: KeyboardEvent) {
      const charCode = event.key.charCodeAt(0);
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    }
  
  }
  