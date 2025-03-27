import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { ServiceVendorManagementComponent } from './service-vendor-management/service-vendor-management.component';
import { ReferralManagementComponent } from './referral-management/referral-management.component';
import { AppUsageAnalyticsComponent } from './app-analytics/app-analytics.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AgentEditComponent } from './agent-edit/agent-edit.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { UserPageComponent } from './user-page/user-page.component';






@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    AgentManagementComponent,
    PropertyManagementComponent,
    ServiceVendorManagementComponent,
    ReferralManagementComponent,
    AppUsageAnalyticsComponent,
    UserEditComponent,
    AgentEditComponent,
    PropertyEditComponent,
    VendorEditComponent,
    UserPageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    AdminDashboardComponent,
    UserManagementComponent,
    AgentManagementComponent,
    PropertyManagementComponent,
    ServiceVendorManagementComponent,
    ReferralManagementComponent,
    AppUsageAnalyticsComponent, 
    UserEditComponent,
    AgentEditComponent,
    PropertyEditComponent,
    VendorEditComponent,
    UserPageComponent,
  
  ]
})
export class AdminModule { }
