import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'fundamentals-list-of-authors',
  templateUrl: './list-of-authors.component.html',
  styleUrls: ['./list-of-authors.component.css']
})
export class ListOfAuthorsComponent implements OnInit {
  authorsList: string[];

  constructor(service: AuthorsService) {
    this.authorsList = service.getAuthors();
   }

  ngOnInit(): void { }

}
