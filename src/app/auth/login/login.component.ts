import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Declare the reactive form

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

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
        localStorage.setItem('userName',formData.username);
        console.log(res);
        if(res && res.data.token){
          localStorage.setItem('jwtToken',res.data.token);
          
    
          console.log(res);
  
        }
      })
      console.log('Login Data:', formData); // Log the data
      alert('Login Successful!'); // Show a success message
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
