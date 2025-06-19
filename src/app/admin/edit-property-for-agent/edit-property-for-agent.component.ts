import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-property-for-agent',
  templateUrl: './edit-property-for-agent.component.html',
  styleUrls: ['./edit-property-for-agent.component.scss'],
})
export class EditPropertyForAgentComponent  implements OnInit {

editropertyforAgent!: FormGroup;
 
   constructor(
     private fb: FormBuilder,
     private router: Router,
   ) {}
 
   ngOnInit(): void {
     this.editropertyforAgent = this.fb.group({
       mobileNumber: [
         '',  [Validators.required, Validators.pattern('^[0-9]{10}$')],
       ]
     });
   }
  }