import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {PasswordResetService} from './password-reset.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  email: string;
  constructor(private formBuilder: FormBuilder, private passwordservice: PasswordResetService) {
  }
  resetpasswordtoservice() {
    return this.formBuilder.group({
      email: ['', Validators.email]
    });
  }

  PasswordReset() {
    this.passwordservice.PasswordReset(this.email).subscribe();
  }


  ngOnInit() {
  }

}
