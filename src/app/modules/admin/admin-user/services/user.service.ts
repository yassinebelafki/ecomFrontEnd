import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environment/environment";
import {AdminPayload} from "../models/admin.payload";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllAdmins(){
      return this.http.get<AdminPayload[]>(environment.baseUrl+"admin")
  }

  deleteAdmin(id: number | undefined){
    return this.http.delete(environment.baseUrl+"admin/"+id)
  }
  addAdmin(admin:AdminPayload){
    return this.http.post(environment.baseUrl+"admin",admin);
  }


  updateAdmin(admin:AdminPayload){
    return this.http.put(environment.baseUrl+"admin",admin);
  }


}
