import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'handling-events-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  imageUrl = "http://lorempixel.com/400/200";
  colspan = 2;
  isPrimary = true;
  isActive = false;
  newEmail = "some@email.com";
  newEmail2 = "some@email2.com";
  course = {
    title: "The complete angular course",
    subtitle: "Advanced",
    rating: 4.9752,
    students: 30133,
    price: 190.95,
    releaseDate: new Date(2020, 11, 19)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button clicked!", $event);
  }

  onDivClicked($event) {
    console.log("Div clicked!", $event);
  }

  onKeyUp($event) {
    console.log("Enter was clicked!", $event);
  }

  onKeyUpValue($event) {
    console.log($event.target.value);
  }

  onKeyUpVariable(value) {
    console.log(value);
  }

  onKeyUpTwoWayBinding(){
    console.log(this.newEmail);
    console.log(this.newEmail2);
  }

}
