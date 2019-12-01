import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileData} from '../profiledata';

@Injectable({
  providedIn: 'root'
})


export class EditProfileService {

  constructor(private http: HttpClient) {
  }

  profileSend(profileData: ProfileData) {
    return this.http.post('http://localhost:8888/editProfile', profileData);
  }


}
