import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangeEmailService} from './change-email.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})

export class ChangeEmailComponent implements OnInit {
  changeEmailForm: FormGroup;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private changeEmailService: ChangeEmailService) {
  }

  changeEmailToService() {
    return this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.changeEmailForm = this.changeEmailToService();
  }

  emailSend() {
    this.changeEmailService.emailSend({email: this.email, password: this.password}).subscribe();
  }

}
