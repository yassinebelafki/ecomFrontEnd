import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-component/app.component';
import {CoreModule} from "../core/core.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from "../modules/communs/components/home/home.component";
import {CommunsModule} from "../modules/communs/communs.module";
import {ProductsModule} from "../modules/products/products.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminModule} from "../modules/admin/admin.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthModule} from "../modules/auth/auth.module";
import {ToastrModule} from "ngx-toastr";
import {NgxWebstorageModule} from "ngx-webstorage";
import {TokenInterceptor} from "../modules/globalInterceptor/token.interceptor";
import {CheckoutModule} from "../modules/checkout/checkout.module";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {CommandModule} from "../modules/command/command.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    CommunsModule,
    ProductsModule,
    BrowserAnimationsModule,
    AdminModule,
      HttpClientModule,
    AuthModule,
    CheckoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    SweetAlert2Module.forRoot(),
    CommandModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
