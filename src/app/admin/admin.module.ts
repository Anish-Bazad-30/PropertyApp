import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { ServiceVendorManagementComponent } from './service-vendor-management/service-vendor-management.component';
import { ReferralManagementComponent } from './referral-management/referral-management.component';
import { AppUsageAnalyticsComponent } from './app-analytics/app-analytics.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AgentEditComponent } from './agent-edit/agent-edit.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { UserPageComponent } from './user-page/user-page.component';
import { IonicModule } from '@ionic/angular';
import { PropertiesViewsComponent } from './properties-views/properties-views.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { NgChartsModule } from 'ng2-charts';
import { UserEngagementChartComponent } from './app-analytics/user-engagement-chart/user-engagement-chart.component';
import { UserEngagementDonutChartComponent } from './app-analytics/user-engagement-donut-chart/user-engagement-donut-chart.component';
import { ReferralPieChartComponent } from './app-analytics/referral-pie-chart/referral-pie-chart.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProfileManagementComponent,
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
    UserPageComponent,
    PropertiesViewsComponent,
    AddAgentComponent,
    AddServiceComponent,
    EditServiceComponent,
    MainComponent,
    UserEngagementChartComponent,
    UserEngagementDonutChartComponent,
    ReferralPieChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    AdminRoutingModule,
    NgChartsModule,
    SharedModule
  ],
  exports: [
    AdminDashboardComponent,
    UserManagementComponent,
    PropertyManagementComponent,
    ServiceVendorManagementComponent,
    ReferralManagementComponent,
    AppUsageAnalyticsComponent,
    UserEditComponent,
    AgentEditComponent,
    PropertyEditComponent,
    UserPageComponent,
    PropertiesViewsComponent,
    AddAgentComponent,
    AddServiceComponent,
    EditServiceComponent,
  ]
})
export class AdminModule { }
