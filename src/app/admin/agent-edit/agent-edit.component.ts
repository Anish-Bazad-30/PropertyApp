import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';

@Component({
  selector: 'agent-user-edit',
  templateUrl: './agent-edit.component.html',
  styleUrls: ['./agent-edit.component.scss'],
})
export class AgentEditComponent  implements OnInit {
  
  userData: any;
    profileForm!: FormGroup;
  
    constructor(private router: Router, private agentProfileManagementService: AgentProfileManagementService,
      private fb: FormBuilder,
      private toastCtrl: ToastController
    ) { }
    ngOnInit(): void {
      // this.fetchAgentData();
      this.profileForm = this.fb.group({
        username: [{ value: '', disabled: true }],
        email: ['', [Validators.required, Validators.email]],
        mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        serviceType: ['', Validators.required]
      });
      this.agentProfileManagementService.agentData$.subscribe(data => {
        this.userData = data;
        this.profileForm.patchValue({
          username: data.username,
          email: data.email,
          mobilenumber: data.mobilenumber,
          role: data.role
        });
      });
  
    }
  
    async showToast(message: string, color: 'success' | 'danger' | 'warning') {
      const toast = await this.toastCtrl.create({
        message,
        duration: 6000,
        color,
        position: 'bottom'
      });
      await toast.present();
    }
    applyToOfferServices() {
      this.router.navigate(['/agent/add-service'])
    }
  
  
  
    // fetchAgentData() {
    //   this.agentProfileManagementService.fetchAgentData(this.userId).subscribe((res) => {
    //     console.log(res.data);
        
    //     this.profileForm.patchValue({
    //       username: res.data.username,
    //       email: res.data.email,
    //       mobilenumber: res.data.mobilenumber,
    //       servicetype: res.data.servicetype
    //     });
    //     console.log(this.profileForm.getRawValue());
        
    //   })
    // }
  
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



    approveAgent() {
      this.agentProfileManagementService.approveAgent(this.userData.id).subscribe({
        next: (res) => {
          
          this.showToast('Agent approved successfully', 'success');
        },
        error: (err) => {
          console.error('Approval error:', err);
          this.showToast('Failed to approve agent', 'danger');
        }
      });
    }
    
    rejectAgent() {
      this.agentProfileManagementService.rejectAgent(this.userData.id).subscribe({
        next: (res) => {
          console.log('Agent rejected:', res);
          // this.fetchAllAgents(); // Refresh agent list
          this.showToast('Agent rejected successfully', 'warning');
        },
        error: (err) => {
          console.error('Rejection error:', err);
          this.showToast('Failed to reject agent', 'danger');
        }
      });
    }
  }