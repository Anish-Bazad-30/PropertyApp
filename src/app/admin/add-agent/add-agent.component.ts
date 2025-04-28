import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
})
export class AddAgentComponent  implements OnInit {
profileForm: FormGroup;
  constructor(
    private router: Router, private fb: FormBuilder,
    private registerService : RegistrationService,
  ) {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required,  Validators.email]],
      // mobilenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: [''] 
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {


  }
  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  updateProfile() {
    if (this.profileForm.valid) {
      this.profileForm.patchValue({ role: 'AGENT' });
      this.registerService.register(this.profileForm.value).subscribe((res)=>{
        this.router.navigate(['/admin/profile-management']);
      })
    } else {
      this.profileForm.markAllAsTouched(); // show validation messages if needed
    }
  }


  onlyDigits(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  }