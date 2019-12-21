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
  userRole: string;

  constructor() {
    this.userRole = history.state.role;
    this.customer = this.userRole == "Customer";
    this.restaurant = this.userRole == "Restaurant";
    this.admin = this.userRole == "Admin";
  }

  ngOnInit() {
  }

}
