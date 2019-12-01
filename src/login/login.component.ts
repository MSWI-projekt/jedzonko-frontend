import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  logintoservice() {
    return this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loginForm = this.logintoservice();
  }

  Loginsend() {
    this.loginService.Loginsend(this.loginForm.value).subscribe();
  }
}
