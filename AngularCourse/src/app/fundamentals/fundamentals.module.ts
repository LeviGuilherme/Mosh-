import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfAuthorsComponent } from './list-of-authors/list-of-authors.component';



@NgModule({
  declarations: [ListOfAuthorsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListOfAuthorsComponent
  ]
})
export class FundamentalsModule { }
