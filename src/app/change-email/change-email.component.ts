import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
