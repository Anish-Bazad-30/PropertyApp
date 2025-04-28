import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
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
      this.userName = formData.email;
  
      const filteredData = {
        username: formData.name,
        password: formData.password,
        role: formData.role,
      };
  
      this.registerService.register(filteredData).subscribe({
        next: async (res) => {
          // Show the message from the backend
          const toast = await this.toastCtrl.create({
            message: res.message || 'Registered successfully!',
            duration: 6000,
            color: 'success',
          });
          await toast.present();
  
          // Save token only if present
          if (res.data) {
            // localStorage.setItem("jwtToken", res.data.token);
            // localStorage.setItem("userName", res.data.username);
            // localStorage.setItem("userId", res.data.userId);
            // localStorage.setItem("role", res.data.role);
            sessionStorage.setItem('role', res.data.role);
sessionStorage.setItem('userId', res.data.userId);
sessionStorage.setItem('userName', res.data.username);
sessionStorage.setItem('jwtToken', res.data.token);
  
            // Call referral service if needed
            this.referAndEarnService.createReferral(this.userName).subscribe({
              next: (refRes) => console.log('Referral created:', refRes),
              error: (error) => console.error('Error generating referral link:', error),
            });
  
            // Redirect based on role
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
          } else {
            // If role info is not returned, fallback to login or show info
            this.router.navigate(['/login']);
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