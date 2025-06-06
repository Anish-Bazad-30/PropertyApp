import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { VendorServicesPageComponent } from './vendor-services-page/vendor-services-page.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';
import { ReferEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { PropertyDetailViewComponent } from './property-detail-view/property-detail-view.component';
import { PostPropertyFormComponent } from './post-property-form/post-property-form.component';
@NgModule({
  declarations: [UserLandingPageComponent,
    VendorServicesPageComponent,
    UserProfileManagementComponent,
    ReferEarnComponent,
    PropertyDetailViewComponent,
    PostPropertyFormComponent,
    MainComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
  ],

})
export class UserModule { }
