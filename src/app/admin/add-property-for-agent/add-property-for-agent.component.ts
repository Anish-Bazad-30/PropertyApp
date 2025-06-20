import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';
import { PropertyService } from 'src/app/services/property.service';

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
     private propertyService: PropertyService
   ) {}
 
   ngOnInit(): void {
     this.addPropertyforAgent = this.fb.group({
      agentId: ['', Validators.required],
      locationUrl: ['', Validators.required],
      ownername: ['', Validators.required],
      ownerNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
   }



   onSubmit() {
    if (this.addPropertyforAgent.invalid) {
      this.addPropertyforAgent.markAllAsTouched();
      return;
    }
    this.propertyService.addPropertiesForAgent(this.addPropertyforAgent.value).subscribe((res)=>{
      
    })
  }
  }