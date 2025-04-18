import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
  ) {}

  ngOnInit() {
    // Define the reactive form with validation rules
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // UserName is required
      password: ['', [Validators.required, Validators.minLength(6)]] // Password: required and minimum 6 characters
    });

  }

  // Handle form submission
  onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value; // Get form data
      console.log(formData);
      this.loginService.login(formData).subscribe((res) => {
        
        console.log(res);
        if(res && res.data.token){
          localStorage.setItem('role', res.data.role)
          localStorage.setItem('userId',res.data.userId);
          localStorage.setItem('userName',res.data.username);
          localStorage.setItem('jwtToken',res.data.token);
          switch (res.data.role) {
                case 'AGENT':
                  this.router.navigate(['/agent']);
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
       
          console.log(res);
        }
      })
   
  
    } else {
 
    }
  }


  navigate() {
    this.router.navigate(["auth/register"]);
    }
}
