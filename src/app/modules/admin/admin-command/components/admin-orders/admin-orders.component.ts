import {Component, OnInit} from '@angular/core';
import {CommandService} from "../../../../command/services/command.service";
import {ResponseCommandPayload} from "../../../../command/models/responseCommand.payload";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit{
  constructor(private commandService: CommandService) {
  }

  commands: ResponseCommandPayload[] = []

  ngOnInit(): void {
    this.fetchAllCommands()
  }
  fetchAllCommands(){
    this.commandService.getAllExistingCommands().subscribe(
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

  changeOrderStatus(id: number | undefined) {
    this.commandService.deliverOrder(id).subscribe(
      response=>{
        this.fetchAllCommands()

        console.log(response)
      },
      error => {
        this.fetchAllCommands()

        console.log(error)
      }
    )
  }
}
