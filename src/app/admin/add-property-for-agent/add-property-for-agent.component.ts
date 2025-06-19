import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';

@Component({
  selector: 'app-add-property-for-agent',
  templateUrl: './add-property-for-agent.component.html',
  styleUrls: ['./add-property-for-agent.component.scss'],
})
export class AddPropertyForAgentComponent  implements OnInit {

  addPropertyforAgent!: FormGroup;
 
   constructor(
     private fb: FormBuilder,
     private router: Router,
   ) {}
 
   ngOnInit(): void {
     this.addPropertyforAgent = this.fb.group({
       mobileNumber: [
         '',  [Validators.required, Validators.pattern('^[0-9]{10}$')],
       ]
     });
   }
  }