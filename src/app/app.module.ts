import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MobilenoverificationComponent } from './verification/mobilenoverification/mobilenoverification.component';
import { OtpverificationComponent } from './verification/otpverification/otpverification.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';

import { PropertyDetailViewComponent } from './user/property-detail-view/property-detail-view.component';
import { UserModule } from './user/user.module';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { AgentModule } from './agent/agent.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [AppComponent,
                MainComponent,
                MobilenoverificationComponent,
                OtpverificationComponent,
                RegistrationComponent,
                LoginComponent,
                PropertyDetailViewComponent,
                
                ],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, UserModule, FormsModule, HttpClientModule, AgentModule, AdminModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
    {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,}
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
