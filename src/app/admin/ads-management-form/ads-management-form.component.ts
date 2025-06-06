import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-management-form',
  templateUrl: './ads-management-form.component.html',
  styleUrls: ['./ads-management-form.component.scss'],
})
export class AdsManagementFormComponent  implements OnInit {
  
  adsForm!: FormGroup;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.adsForm = this.fb.group({
      description: ['', Validators.required],
      mobileNumber: [
        '',  [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ]
    });
  }

}
  