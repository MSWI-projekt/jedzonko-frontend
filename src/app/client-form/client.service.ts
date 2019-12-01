import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Client} from '../models/client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 constructor(private http: HttpClient) {}

 addClient(data): Observable<Client> {
   return this.http.post<Client>('http://localhost:8888/login/register', data);
 }

}
