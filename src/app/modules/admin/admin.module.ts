import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './comuncomponents/dashboard-page/dashboard-page.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ProductModule} from "./product/product.module";
import {CommandModule} from "../command/command.module";
import {AdminCommandModule} from "./admin-command/admin-command.module";
import {AdminUserModule} from "./admin-user/admin-user.module";




@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ProductModule,
    AdminCommandModule,
    AdminUserModule
  ],
  exports : [DashboardPageComponent]
})
export class AdminModule { }
