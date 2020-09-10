import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fundamentals-list-of-authors',
  templateUrl: './list-of-authors.component.html',
  styleUrls: ['./list-of-authors.component.css']
})
export class ListOfAuthorsComponent implements OnInit {
  authorsList: string[];

  constructor() { }

  ngOnInit(): void {
    this.authorsList = this.getAuthors();
  }
  
  getAuthors(){
    return ['Author One','Author Two','Author Three']
  }

}
