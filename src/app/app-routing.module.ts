import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MobilenoverificationComponent } from './verification/mobilenoverification/mobilenoverification.component';
import { OtpverificationComponent } from './verification/otpverification/otpverification.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { PropertyDetailViewComponent } from './user/property-detail-view/property-detail-view.component';
import { UserProfileManagementComponent } from './user/user-profile-management/user-profile-management.component';
import { VendorServicesPageComponent } from './user/vendor-services-page/vendor-services-page.component';
import { ReferEarnComponent } from './user/refer-and-earn/refer-and-earn.component';
import { PropertyUploadComponent } from './agent/property-upload/property-upload.component';
import { PropertyUploadFormComponent } from './agent/property-upload-form/property-upload-form.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { ServiceListingComponent } from './agent/service-listing/service-listing.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AgentManagementComponent } from './admin/agent-management/agent-management.component';
import { PropertyManagementComponent } from './admin/property-management/property-management.component';
import { ServiceVendorManagementComponent } from './admin/service-vendor-management/service-vendor-management.component';
import { ReferralManagementComponent } from './admin/referral-management/referral-management.component';
import { AppUsageAnalyticsComponent } from './admin/app-analytics/app-analytics.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { AgentEditComponent } from './admin/agent-edit/agent-edit.component';
import { VendorEditComponent } from './admin/vendor-edit/vendor-edit.component';
import { PropertyEditComponent } from './admin/property-edit/property-edit.component';








const routes: Routes = [
  // {
  //   path: 'getstarted',
  //   loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'getstarted',
  //   pathMatch: 'full'
  // },
  {path:'', component: MainComponent},
  {path:'mobilenoverification', component: MobilenoverificationComponent},
  {path:'otp', component: OtpverificationComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserLandingPageComponent},
  {path:'detailview', component: PropertyDetailViewComponent},
  {path:'uprofile', component: UserProfileManagementComponent},
  {path:'vendor', component: VendorServicesPageComponent},
  {path:'refer', component: ReferEarnComponent},
  {path:'upload', component: PropertyUploadComponent},
  {path:'form', component: PropertyUploadFormComponent},
  {path:'agent', component: AgentProfileComponent},
  {path:'service', component: ServiceListingComponent},
  {path:'admin', component: AdminDashboardComponent},
  {path:'umanage', component: UserManagementComponent},
  {path:'amanage', component: AgentManagementComponent},
  {path:'pmanage', component: PropertyManagementComponent},
  {path:'smanage', component: ServiceVendorManagementComponent},
  {path:'rmanage', component: ReferralManagementComponent},
  {path:'astats', component: AppUsageAnalyticsComponent},
  {path:'euser', component: UserEditComponent},
  {path:'eagent', component: AgentEditComponent},
  {path:'eproperty', component: PropertyEditComponent},
  {path:'evendor', component: VendorEditComponent},
  

  

  
  





  


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
