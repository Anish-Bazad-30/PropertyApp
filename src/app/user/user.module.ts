import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { VendorServicesPageComponent } from './vendor-services-page/vendor-services-page.component';
import { UserProfileManagementComponent } from './user-profile-management/user-profile-management.component';
import { ReferEarnComponent } from './refer-and-earn/refer-and-earn.component';





@NgModule({
  declarations: [UserLandingPageComponent,
    VendorServicesPageComponent,
    UserProfileManagementComponent,
    ReferEarnComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],

})
export class UserModule { }
