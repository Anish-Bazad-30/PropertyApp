import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './interceptor/auth.guard';

const routes: Routes = [
 
  {path:'', component: MainComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( (m) => m.AuthModule)
  },
  {
    path: 'user',
   canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then( (m) => m.UserModule)
  },
  {
    path: 'agent',
   canActivate: [AuthGuard],
    loadChildren: () => import('./agent/agent.module').then( (m) => m.AgentModule)
  },
  {
    path: 'admin',
   canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then( (m) => m.AdminModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
