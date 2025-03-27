import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyUploadFormComponent } from './property-upload-form/property-upload-form.component';
import { PropertyUploadComponent } from './property-upload/property-upload.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';



@NgModule({
  declarations: [
    PropertyUploadFormComponent,
    PropertyUploadComponent,
    AgentProfileComponent,
    ServiceListingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PropertyUploadFormComponent,
    PropertyUploadComponent, // Export if used in other modules
    AgentProfileComponent
  ]
})
export class AgentModule { }
