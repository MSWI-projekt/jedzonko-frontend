import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EditProfileService} from './edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  name: string;
  surname: string;
  street: string;
  postalCode: string;
  city: string;

  constructor(private formBuilder: FormBuilder, private editProfileService: EditProfileService) {
  }

  editProfileToService() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.editProfileForm = this.editProfileToService();
  }

  profileSend() {
    this.editProfileService.profileSend({
      name: this.name,
      surname: this.surname,
      street: this.postalCode,
      postalCode: this.postalCode,
      city: this.city
    }).subscribe();
  }

}
