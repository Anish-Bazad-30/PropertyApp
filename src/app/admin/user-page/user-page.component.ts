import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['User A', Validators.required],
      email: ['usera@gmail.com', [Validators.required, Validators.email]],
      status: ['Active']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    }
  }

  onCancel(): void {
    this.userForm.setValue({
      name: 'User A',
      email: 'usera@gmail.com',
      status: 'Active'
    });
  }
}
