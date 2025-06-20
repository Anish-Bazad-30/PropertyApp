import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { PropertyDetailViewComponent } from './property-detail-view/property-detail-view.component';
import { ReferEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';
import { VendorServicesPageComponent } from './vendor-services-page/vendor-services-page.component';
import { MainComponent } from './main/main.component';
import { PostPropertyFormComponent } from './post-property-form/post-property-form.component';
import { PropertyEditFormComponent } from './property-edit-form/property-edit-form.component';
import { PropertyListComponent } from './property-list/property-list.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'landing-page', component: UserLandingPageComponent },
      { path: 'property-detail-view', component: PropertyDetailViewComponent },
      { path: 'refer-and-earn', component: ReferEarnComponent },
      { path: 'profile', component: UserProfileManagementComponent },
      { path: 'vendor-service', component: VendorServicesPageComponent },
      { path: 'post-property', component: PostPropertyFormComponent },
      { path: 'edit-property', component: PropertyEditFormComponent },
      { path: 'list-property', component: PropertyListComponent },
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}