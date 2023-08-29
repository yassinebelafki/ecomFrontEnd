import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {AdminPayload} from "../models/admin.payload";
import Swal from "sweetalert2";
import {ProductPayload} from "../../../globalModels/product.payload";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  addToggled:boolean=false;
  updateToggled:boolean=false;

  toggleAdd() {
    this.addToggled=true;
  }

  addToggledListinner($event: boolean) {
    this.addToggled = $event;
    this.updateToggled=$event
  }
  constructor(private userService:UserService) {
  }
  admins:AdminPayload[]=[]
  ngOnInit(): void {
  this.fetchAllUsers()
  }
fetchAllUsers(){
  this.userService.getAllAdmins().subscribe(
    response=>{
      this.admins=response;
    },
    error => {
      console.log(error)
    }
  )
}










  // deleteProduct(id: number | undefined) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.productAdminService.deleteProduct(id).subscribe(
  //         reponse=>{
  //           this.fetchAllProduct()
  //           Swal.fire(
  //             'Deleted!',
  //             'Your file has been deleted.',
  //             'success'
  //           )
  //
  //         },
  //         error => {
  //           console.log(error)
  //         }
  //       )
  //
  //     }
  //   })
  //
  //
  //
  // }

  adminToUpdate!:AdminPayload;

  toggleUpdate(adminPayload:AdminPayload) {
    this.updateToggled=true;
    this.adminToUpdate=adminPayload;

  }

  closedToggled($event: boolean) {
    this.addToggled = $event
  }

  userAdded($event: boolean) {
    if ($event){
      this.fetchAllUsers()
    }
  }

  deleteProduct(id: number | undefined) {
    this.userService.deleteAdmin(id).subscribe(
      response=>{
        this.fetchAllUsers()
      },
      error => {
        this.fetchAllUsers()
      }
    )
  }
}
