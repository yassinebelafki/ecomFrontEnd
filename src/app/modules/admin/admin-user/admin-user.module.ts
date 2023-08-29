import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import {ProductModule} from "../product/product.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ReactiveFormsModule
  ],
  exports : [
    UserEditComponent,
    UserListComponent
  ]
})
export class AdminUserModule { }
