import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {logindata} from '../logindata';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http: HttpClient) {
  }

  Loginsend(data): Observable<logindata> {
    return this.http.post<logindata>('http://localhost:8888/login/data', data);


  }


}
