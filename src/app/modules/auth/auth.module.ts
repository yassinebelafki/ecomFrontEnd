import { NgModule } from '@angular/core';
import { LoginComponent } from './componenets/login/login.component';
import { SignupComponent } from './componenets/signup/signup.component';
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    SharedModule,
    RouterLink
  ],
  exports : [  LoginComponent,
    SignupComponent]
})
export class AuthModule { }
