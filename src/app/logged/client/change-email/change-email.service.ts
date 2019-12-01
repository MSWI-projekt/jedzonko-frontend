import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {logindata} from '../../../logindata';

@Injectable({
  providedIn: 'root'
})


export class ChangeEmailService {

  constructor(private http: HttpClient) {
  }

  emailSend(Logindata: logindata) {
    return this.http.post('http://localhost:8888/changeEmail', Logindata);
  }


}
