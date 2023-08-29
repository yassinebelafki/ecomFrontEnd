import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupPayload} from "../models/signup.payload";
import {environment} from "../../../environment/environment";
import {LoginPayload} from "../models/login.payload";
import {LocalStorageService} from "ngx-webstorage";
import {map} from "rxjs/operators";
import {LoginResponseModel} from "../models/loginResponse.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedId:boolean=false;
  loginStatusChanged = new Subject<boolean>();

  adminRole:string=""
  constructor(private http:HttpClient,private localStorage:LocalStorageService) { }



  signUpService(singupForm:SignupPayload){
    return  this.http.post(environment.baseUrl+"auth/signup/client",singupForm)
  }

  loginService(loginForm:LoginPayload){
    return  this.http.post<LoginResponseModel>(environment.baseUrl+"auth/login",loginForm).pipe(
      map(
        (data:LoginResponseModel)=>{
          if (data.role=='admin' || data.role=='delivery'){
            this.localStorage.store("adminRole",data.role)
            return false;
          }
          else {
            this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('expiresAt', data.expiresAt);
            return  true;
          }

        }
      )
    )
  }
  getUsername() {
    return this.localStorage.retrieve("username")
  }
  islogedin(){
    return (this.getJwt()!=null)
  }
  getJwt() {
    return this.localStorage.retrieve("authenticationToken")
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('expiresAt');
    window.location.reload()

  }
}
