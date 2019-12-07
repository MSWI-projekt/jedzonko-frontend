import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  customer: boolean;
  restaurant: boolean;
  admin: boolean;
  userRole: string = "admin";

  constructor() {
    this.customer = this.userRole == "customer";
    this.restaurant = this.userRole == "restaurant";
    this.admin = this.userRole == "admin";
  }

  ngOnInit() {
  }

}
