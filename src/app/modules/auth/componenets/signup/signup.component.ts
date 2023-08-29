import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupPayload} from "../../models/signup.payload";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signUpForm!:FormGroup;

  signupRequest!:SignupPayload;
  isloading:boolean=false;


  // constructor(private signupservice:RegistrationService,
  //             private router:Router,
  //             private toastr:ToastrService) {
  //   this.signupRequest= {username:"",email:"",password:""}
  // }
  constructor(private authService:AuthService,
              private toastr:ToastrService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.signUpForm= new FormGroup<any>(
      {
        firstname:new FormControl('',Validators.required),
        lastname:new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required,Validators.email]),
        password:new FormControl('',Validators.required)}
    )
  }


  // signupUser() {
  //   this.isloading=true;
  //   this.signupRequest={username:this.signUpForm.get('username').value
  //     ,password:this.signUpForm.get('password').value,
  //     email:this.signUpForm.get('email').value}
  //   this.signupservice.signup(this.signupRequest).subscribe(
  //     ()=>{
  //       this.isloading=false;
  //       this.router.navigate(["/login"],{queryParams:{registered:true}})
  //     },
  //     error => {
  //       this.toastr.error('Registration Failed! Please try again')
  //     }
  //   )
  // }

  signupClient() {
      this.isloading=true;
      this.signupRequest=
        {firstName:this.signUpForm.get('firstname')?.value,
          lastName:this.signUpForm.get('lastname')?.value
        ,password:this.signUpForm.get('password')?.value,
        email:this.signUpForm.get('email')?.value}
    this.authService.signUpService(this.signupRequest).subscribe(
      (response)=>{
        this.isloading = false;
      },
      error => {
        this.isloading = false;
        this.router.navigate(["/login"],{queryParams:{registered:true}})
      }
    )
      // this.signupservice.signup(this.signupRequest).subscribe(
      //   ()=>{
      //     this.isloading=false;
      //     this.router.navigate(["/login"],{queryParams:{registered:true}})
      //   },
      //   error => {
      //     this.toastr.error('Registration Failed! Please try again')
      //   }
      // )
  }
}
