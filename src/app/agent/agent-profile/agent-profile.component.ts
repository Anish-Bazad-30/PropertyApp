import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
})
export class AgentProfileComponent implements OnInit {

  userId: any;
  profileForm!: FormGroup;

  constructor(
    private router: Router, 
    private agentProfileManagementService: AgentProfileManagementService,
    private fb: FormBuilder,
    private storageService: StorageService
  ) { }
  async ngOnInit() {
    
    this.profileForm = this.fb.group({
      username: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      serviceType: ['', Validators.required]
    });
    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);
    this.fetchAgentData();
  }

  applyToOfferServices() {
    this.router.navigate(['/agent/add-service'])
  }



  fetchAgentData() {
    // const storedUserId = localStorage.getItem('userId');
    // this.userId = storedUserId !== null ? storedUserId : '';
    
    this.agentProfileManagementService.fetchAgentData(this.userId).subscribe((res) => {
      console.log(res.data);
      
      this.profileForm.patchValue({
        username: res.data.username,
        email: res.data.email,
        mobilenumber: res.data.mobilenumber,
        servicetype: res.data.servicetype
      });
      console.log(this.profileForm.getRawValue());
      
    })
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      
      return;
    }

    // Use getRawValue() to include disabled fields (like userName)
    const profileData = this.profileForm.getRawValue();

    this.agentProfileManagementService.updateProfile(profileData).subscribe(
      (res) => {
        console.log('Profile updated successfully', res);
      },
      (error) => {
        console.error('Error updating profile', error);
      }
    );
  }
  onlyDigits(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
}
}