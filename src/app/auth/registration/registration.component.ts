import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ReferAndEarnService } from 'src/app/services/refer-and-earn.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  userName: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
    private registerService: RegistrationService,
    private referAndEarnService: ReferAndEarnService,
    private router: Router,
    private toastCtrl: ToastController,
    private storageService: StorageService
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
      this.userName = formData.name;

      const filteredData = {
        username: formData.name,
        password: formData.password,
        role: formData.role,
      };

      this.registerService.register(filteredData).subscribe({
        next: async (res) => {
          const toast = await this.toastCtrl.create({
            message: res.message || 'Registered successfully!',
            duration: 6000,
            color: 'success',
          });
          await toast.present();

          if (res.data) {
            // sessionStorage.setItem('role', res.data.role);
            // sessionStorage.setItem('userId', res.data.userId);
            // sessionStorage.setItem('userName', res.data.username);
            // sessionStorage.setItem('jwtToken', res.data.token);
            this.storageService.setPreference('role', res.data.role);
            this.storageService.setPreference('userId', res.data.userId);
            this.storageService.setPreference('userName', res.data.username);
            this.storageService.setPreference('jwtToken', res.data.token);
            this.referAndEarnService.createReferral(this.userName).subscribe({
              next: (refRes) => console.log('Referral created:', refRes),
              error: (error) => console.error('Error generating referral link:', error),
            });

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
            this.router.navigate(['/login']);
          }
        },
        error: async (error) => {
          console.error('Error during registration:', error);

          const toast = await this.toastCtrl.create({
            message: error?.error?.message || 'An error occurred. Please try again.',
            duration: 6000,
            color: 'danger',
          });
          await toast.present();
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