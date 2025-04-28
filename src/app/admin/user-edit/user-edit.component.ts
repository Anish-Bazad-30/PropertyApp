import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileManagementService } from 'src/app/services/user-profile-management.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  username: string = '';
  role: string = '';
  userId: string = "";

  profileForm!: FormGroup;
  userData: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userProfileManagementService: UserProfileManagementService) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      id: [''],
      username: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      role: [{ value: '', disabled: true }]
    });

    this.userProfileManagementService.userData$.subscribe(data => {
      this.userData = data;
      this.profileForm.patchValue({
        username: data.username,
        email: data.email,
        mobilenumber: data.mobilenumber,
        role: data.role
      });
    });

    console.log(this.userData);

  }




  goBack() {
    this.router.navigate(['/previous-page']);
  }


  updateProfile() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.getRawValue();
      console.log(formData);

      this.userProfileManagementService.updateProfile(formData).subscribe((res) => {
        console.log(res);
      })
    } else {
      console.log('Form is invalid');
    }
  }

  onlyDigits(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
