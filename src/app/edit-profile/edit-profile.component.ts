import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  loginForm: FormGroup;
  name: string;
  surname: string;
  street: string;
  postalCode: string;
  city: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
