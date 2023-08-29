import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./root-component/app.component";
import {HomeComponent} from "../modules/communs/components/home/home.component";
import {DashboardPageComponent} from "../modules/admin/comuncomponents/dashboard-page/dashboard-page.component";
import {HeroComponent} from "../modules/communs/components/hero/hero.component";
import {ProductListComponent} from "../modules/admin/product/product-list/product-list.component";
import {ProductPageComponent} from "../modules/products/product-page/product-page.component";
import {LoginComponent} from "../modules/auth/componenets/login/login.component";
import {SignupComponent} from "../modules/auth/componenets/signup/signup.component";
import {ProductDetailsComponent} from "../modules/products/product-details/product-details.component";
import {CartDetailsComponent} from "../modules/cart/components/cart-details/cart-details.component";
import {CheckoutInfoComponent} from "../modules/checkout/componenets/checkout-info/checkout-info.component";
import {CheckoutAdressComponent} from "../modules/checkout/componenets/checkout-adress/checkout-adress.component";
import {CommandsListComponent} from "../modules/command/components/commands-list/commands-list.component";
import {AdminOrdersComponent} from "../modules/admin/admin-command/components/admin-orders/admin-orders.component";
import {UserListComponent} from "../modules/admin/admin-user/user-list/user-list.component";
import {AboutusComponent} from "../modules/communs/components/aboutus/aboutus.component";


const routes: Routes = [
  {path:"", component:HomeComponent,
  children:[
    {path:"",component:HeroComponent},
    {path:"products",component:ProductPageComponent},
    {path:"products/:id",component:ProductDetailsComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"cart",component:CartDetailsComponent},
    {path:"checkout/address",component:CheckoutAdressComponent},
    {path:"checkout/payment",component:CheckoutInfoComponent},
    {path:"orders",component:CommandsListComponent},
    {path:"about",component:AboutusComponent}
  ]},
  {path:"admin",component:DashboardPageComponent,
  children:[
    {path: "products",component: ProductListComponent},
    {path: "orders",component: AdminOrdersComponent},
    {path: "users",component: UserListComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
