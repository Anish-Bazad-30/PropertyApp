import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PropertyUploadComponent } from './property-upload/property-upload.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { PropertyEditFormComponent } from './property-edit-form/property-edit-form.component';
import { PropertyUploadFormComponent } from './property-upload-form/property-upload-form.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'landing-page', component:  PropertyUploadComponent},
      { path: 'add-service', component: AddServiceComponent },
      { path: 'profile', component: AgentProfileComponent },
      { path: 'buyer-details', component: BuyerDetailsComponent },
      { path: 'services', component: ServiceListingComponent },
      { path: 'edit-property', component: PropertyEditFormComponent },
      { path: 'upload-property', component: PropertyUploadFormComponent },
      { path: 'edit-service', component: EditServiceComponent },
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}