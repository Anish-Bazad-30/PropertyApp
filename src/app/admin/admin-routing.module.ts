import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { ServiceVendorManagementComponent } from './service-vendor-management/service-vendor-management.component';
import { ReferralManagementComponent } from './referral-management/referral-management.component';
import { AppUsageAnalyticsComponent } from './app-analytics/app-analytics.component';
import { PropertiesViewsComponent } from './properties-views/properties-views.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AgentEditComponent } from './agent-edit/agent-edit.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { AgentManagementComponent } from './agent-management/agent-management.component';
import { UserEngagementChartComponent } from './app-analytics/user-engagement-chart/user-engagement-chart.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'landing-page', component:  AdminDashboardComponent},
      { path: 'profile-management', component:  ProfileManagementComponent},
      { path: 'user', component: UserManagementComponent},
      { path: 'agent', component: AgentManagementComponent},
      { path: 'property-management', component: PropertyManagementComponent},
      { path: 'service-management', component:  ServiceVendorManagementComponent},
      { path: 'referral-management', component: ReferralManagementComponent},
      { path: 'app-usage-statistic', component: AppUsageAnalyticsComponent},
      { path: 'property-views', component: PropertiesViewsComponent},
      { path: 'add-user', component: UserPageComponent},
      { path: 'add-agent', component: AddAgentComponent},
      { path: 'add-services', component: AddServiceComponent},
      { path: 'edit-user', component: UserEditComponent},
      { path: 'edit-agent', component: AgentEditComponent},
      { path: 'edit-services', component: EditServiceComponent},
      { path: 'edit-property', component: PropertyEditComponent},
      { path: 'user-chart', component: UserEngagementChartComponent},
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}