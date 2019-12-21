import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Client} from './models/client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
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
    this.loginService.Loginsend({email: this.email, password: this.password}).subscribe(
      (client) => {
        this.router.navigate(['main'], {state: {role: (<Client>client).userRole}});
      }
    );
  }
}
