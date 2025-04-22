import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferAndEarnService } from 'src/app/services/refer-and-earn.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent  implements OnInit {
  registrationForm!: FormGroup;
  userName: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, 
    private registerService: RegistrationService,
    private referAndEarnService: ReferAndEarnService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      referral: [''],
      role: ['user', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }


  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  
  onRegister() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.userName = formData.name
      // Extract only the required properties
      const filteredData = {
        username: formData.name,
        password: formData.password,
        role: formData.role,
      };
  
      this.registerService.register(filteredData).subscribe({
        
        next: (res) => {
          localStorage.setItem("jwtToken",res.data.token);
          localStorage.setItem("userName",res.data.username);
          localStorage.setItem("userId",res.data.id);
          localStorage.setItem("role",res.data.role);
          this.referAndEarnService.createReferral(this.userName).subscribe({
            next: (res) => console.log('Referral created:', res),
            error: (error) => console.error('Error generating referral link:', error),
          });

          if (res.code === 200) {
            switch (res.data.role) {
              case 'ADMIN':
                this.router.navigate(['/admin']);
                break;
              case 'USER':
                this.router.navigate(['/user']);
                break;
                case 'AGENT':
                this.router.navigate(['/agent']);
                break;
              default:
                this.router.navigate(['/login']);
                break;
            }
          }
        },
        error: (error) => {
          console.error('Error during registration:', error);
          
          if (error.status === 409) { 
            this.errorMessage = error.error.message || 'User already registered';
          } else {
            this.errorMessage = 'An error occurred. Please try again.';
          }
        }
      });
    } else {
      console.error('Form is invalid');
      this.errorMessage = 'Please correct the errors in the form.';
    }
  }


  navigate() {
    this.router.navigate(["auth/login"]);
    }
}