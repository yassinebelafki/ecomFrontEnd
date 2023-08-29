import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {ResponseCommandPayload} from "../models/responseCommand.payload";

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private httpClient:HttpClient) { }




  getAllCommands(){
    return this.httpClient.get<ResponseCommandPayload[]>(environment.baseUrl+"command")
  }
  getAllExistingCommands(){
    return this.httpClient.get<ResponseCommandPayload[]>(environment.baseUrl+"command/all")
  }


  deleteCommand(id: number | undefined) {
    return this.httpClient.delete(environment.baseUrl+"command/"+id);
  }

  deliverOrder(id: number | undefined) {
    return this.httpClient.post(environment.baseUrl+"command/status",{
      commandId:id,
      status:"delivered"
    })
  }
}
