import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClientService} from './client.service';
import {Client} from '../models/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  marked = false;
  theCheckbox = false;
  constructor(private  formBuilder: FormBuilder, private clientService: ClientService) {
  }
  clientForm: FormGroup;

  ngOnInit() {
    this.clientForm = this.buildClientForm();
  }

  buildClientForm() {
    return this.formBuilder.group(
      {
        name: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern('[a-zA-Z ŁłąĄćĆęĘóÓśŚżŻźŹń]*')]),
        surname: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern('[a-zA-Z ŁłąĄćĆęĘóÓśŚżŻźŹń]*')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ŁłąĄćĆęĘóÓśŚżŻźŹń]*')]),
        houseFlatNumber: new FormControl('', Validators.required),
        postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}\\-[0-9]{3}')]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
        confirmedPassword: new FormControl('', Validators.required),
        city: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZŁłąĄćĆęĘóÓśŚżŻźŹń]*') ]),
        userRole: 'Customer'
      });
  }

  addClient() {
      this.clientService.addClient(this.clientForm.value).subscribe();
  }
}
