import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsListComponent } from './components/commands-list/commands-list.component';



@NgModule({
  declarations: [
    CommandsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[CommandsListComponent]
})
export class CommandModule { }
