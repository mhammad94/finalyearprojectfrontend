import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AntdesignModule } from '../../shared/antdesign/antdesign.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionsService } from '../../services/permissions.service';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AntdesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    PermissionsService
  ]
})
export class AuthenticationModule { }
