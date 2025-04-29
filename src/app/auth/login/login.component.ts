import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Declare the reactive form

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Define the reactive form with validation rules
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // email is required
      password: ['', [Validators.required, Validators.minLength(6)]] // Password: required and minimum 6 characters
    });

  }

  // Handle form submission
  async onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData);
  
      this.loginService.login(formData).subscribe({
        next: async (res) => {
          if (res && res.data.token) {
            sessionStorage.setItem('role', res.data.role);
            sessionStorage.setItem('userId', res.data.userId);
            sessionStorage.setItem('userName', res.data.username);
            sessionStorage.setItem('jwtToken', res.data.token);
  
            const toast = await this.toastCtrl.create({
              message: 'Login successful!',
              duration: 4000,
              color: 'success'
            });
            await toast.present();
  
            switch (res.data.role) {
              case 'AGENT':
                this.router.navigate(['/agent']);
                break;
              case 'USER':
                this.router.navigate(['/user']);
                break;
              case 'ADMIN':
                this.router.navigate(['/admin']);
                break;
              default:
                this.router.navigate(['/login']);
                break;
            }
          }
        },
        error: async (error) => {
          console.error('Login error:', error);
  
          const toast = await this.toastCtrl.create({
            message: error?.error?.error || 'Login failed. Please try again.',
            duration: 5000,
            color: 'danger'
          });
          await toast.present();
        }
      });
    }
  }


  navigate() {
    this.router.navigate(["auth/register"]);
  }
}
