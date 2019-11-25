import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {logindata} from '../model';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http: HttpClient) { }
  Loginsend(Logindata: logindata) {
    return this.http.post('http://localhost:8888/login', Logindata);
  }
}
