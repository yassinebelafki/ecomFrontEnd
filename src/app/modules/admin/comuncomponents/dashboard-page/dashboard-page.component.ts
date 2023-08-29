import {Component, inject, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import {Observable, shareReplay} from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from "../../../auth/services/auth.service";
import {LocalStorageService} from "ngx-webstorage";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(private authService:AuthService,private localStorage:LocalStorageService
  ,private activeRoute:Router) {
  }
  loggedRole:string=""
  ngOnInit(): void {

    this.loggedRole=this.localStorage.retrieve("adminRole");

  }

  logout() {
    this.localStorage.clear();
    this.activeRoute.navigate(["/login"])
  }
}
