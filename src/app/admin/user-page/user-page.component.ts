import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  profileForm!: FormGroup;
  constructor(
    private router: Router, private fb: FormBuilder,
    private userProfileManagementService: UserProfileManagementService,
    private registerService : RegistrationService
  ) {}

  ngOnInit(): void {
      this.profileForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        // mobilenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        role: [''] 
      }, { validators: this.passwordsMatchValidator });
    }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  updateProfile() {
    if (this.profileForm.valid) {
      this.profileForm.patchValue({ role: 'USER' });
      this.registerService.register(this.profileForm.value).subscribe((res)=>{

      })
    } else {
      this.profileForm.markAllAsTouched(); // show validation messages if needed
    }
  }

  goBack() {
    this.router.navigate(['/previous-page']);
  }

}
