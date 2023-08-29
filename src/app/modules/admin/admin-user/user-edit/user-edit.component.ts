import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductPayload} from "../../../globalModels/product.payload";
import {ProductService} from "../../../globalServices/product.service";
import {HttpClient} from "@angular/common/http";
import {AdminPayload} from "../models/admin.payload";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{



  @Output() addToggled: EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() userAdded: EventEmitter<boolean>=new EventEmitter<boolean>();
  userFrom!:FormGroup;
  spinnerToggle:boolean=false
  @Input() updatedUser:AdminPayload | undefined;


  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userFrom = new FormGroup<any>({
      firstName:new FormControl(this.updatedUser?.firstName,Validators.required),
      lastName : new FormControl(this.updatedUser?.lastName,Validators.required),
      email:new FormControl(this.updatedUser?.email,Validators.required),
      password:new FormControl(this.updatedUser?.password,Validators.required),
      role:new FormControl(this.updatedUser?.role,Validators.required),
    })
  }

  closeAdd() {
    this.addToggled.emit(false)
  }


  submitUserFrom() {
    if (this.updatedUser){
      this.updateUser()
    }
    else {
      this.addUser()
    }

  }

  addUser(){
    const adminPayload: AdminPayload = {
      firstName: this.userFrom.get('firstName')?.value,
      lastName: this.userFrom.get('lastName')?.value,
      role: this.userFrom.get('role')?.value,
      email: this.userFrom.get('email')?.value,
      password: this.userFrom.get('password')?.value,
    };

    this.spinnerToggle=true
    this.userService.addAdmin(adminPayload).subscribe(
      response => {
        this.addToggled.emit(false)
        this.userAdded.emit(true)
        this.spinnerToggle=false
      },
      error => {
        console.log(error);
      }
    );
  }

  updateUser(){
    const adminPayload: AdminPayload = {
      id:this.updatedUser?.id,
      firstName: this.userFrom.get('firstName')?.value,
      lastName: this.userFrom.get('lastName')?.value,
      role: this.userFrom.get('role')?.value,
      email: this.userFrom.get('email')?.value,
      password: this.userFrom.get('password')?.value,
    };

    this.spinnerToggle=true
    this.userService.updateAdmin(adminPayload).subscribe(
      response => {
        this.addToggled.emit(false)
        this.userAdded.emit(true)
        this.spinnerToggle=false
      },
      error => {
        console.log(error);
      }
    );
  }








}
