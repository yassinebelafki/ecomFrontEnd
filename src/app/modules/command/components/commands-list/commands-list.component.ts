import {Component, OnInit} from '@angular/core';
import {CommandService} from "../../services/command.service";
import {ResponseCommandPayload} from "../../models/responseCommand.payload";
import {DatePipe} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.scss']
})
export class CommandsListComponent implements OnInit {
  constructor(private commandService: CommandService) {
  }

  commands: ResponseCommandPayload[] = []

  ngOnInit(): void {
    this.fetchAllCommands()
  }
  fetchAllCommands(){
    this.commandService.getAllCommands().subscribe(
      (response) => {
        console.log(response)
        this.commands = response;
        this.productTraitement()
      }
      ,
      error => {
        console.log(error)
      }
    )
  }

  productTraitement() {
    for (let i = 0; i < this.commands.length; i++) {

      for (let j = 0; j < this.commands[i].shoppingCarts.length; j++) {
        this.commands[i].shoppingCarts[j].product.banner = 'data:image/jpeg;base64,' + this.commands[i].shoppingCarts[j].product.bannerData

      }
    }
  }

  calculateTotal(j: number) {
    let total: number = 0;
    for (let i = 0; i < this.commands[j].shoppingCarts.length; i++) {
      total = total + (this.commands[j].shoppingCarts[i].product.price * this.commands[j].shoppingCarts[i].quantity)
    }
    return total
  }

  deleteCommand(id: number | undefined) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.commandService.deleteCommand(id).subscribe(
          response=>{
            Swal.fire(
              'Deleted!',
              'Your Order has been canceled.',
              'success'
            )
            this.fetchAllCommands()
            console.log(response)
          },
          error => {
            console.log(error)
          }
        );


      }
    })


  }
}
