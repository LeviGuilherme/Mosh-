import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfAuthorsComponent } from './list-of-authors/list-of-authors.component';
import { AuthorsService } from './services/authors.service';



@NgModule({
  declarations: [ListOfAuthorsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListOfAuthorsComponent
  ],
  providers: [
    AuthorsService
  ]
})
export class FundamentalsModule { }
