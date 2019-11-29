import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {logindata} from '../../logindata';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(private http: HttpClient) { }
  PasswordReset( email: string) {
    return this.http.post('http://localhost:8888/forgetPassword', email);
  }
}
