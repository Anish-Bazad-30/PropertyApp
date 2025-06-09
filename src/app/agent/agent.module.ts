import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyUploadFormComponent } from './property-upload-form/property-upload-form.component';
import { PropertyUploadComponent } from './property-upload/property-upload.component';
import { PropertyEditFormComponent } from './property-edit-form/property-edit-form.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { IonicModule } from '@ionic/angular';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AgentRoutingModule } from './agent-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MapDetailsComponent } from './map-details/map-details.component';



@NgModule({
  declarations: [
    PropertyUploadFormComponent,
    PropertyEditFormComponent,
    PropertyUploadComponent,
    AgentProfileComponent,
    ServiceListingComponent,
    AddServiceComponent,
    EditServiceComponent,
    BuyerDetailsComponent,
    MainComponent,
    MapDetailsComponent,
  ],
  imports: [
    AgentRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PropertyUploadFormComponent,
    PropertyUploadComponent, // Export if used in other modules
    AgentProfileComponent
  ]
})
export class AgentModule { }
