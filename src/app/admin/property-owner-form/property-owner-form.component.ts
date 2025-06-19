import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-owner-form',
  templateUrl: './property-owner-form.component.html',
  styleUrls: ['./property-owner-form.component.scss'],
})
export class PropertyOwnerFormComponent  implements OnInit {

   propertyOwnerForm!: FormGroup;
 
   constructor(
     private fb: FormBuilder,
     private router: Router,
   ) {}
 
   ngOnInit(): void {
     this.propertyOwnerForm = this.fb.group({
       mobileNumber: [
         '',  [Validators.required, Validators.pattern('^[0-9]{10}$')],
       ]
     });
   }
 
 }