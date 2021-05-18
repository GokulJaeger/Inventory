import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  apilink="http://localhost:3000/userProfile";
  constructor(private _http: HttpClient) { }
  getusers(){
    return this._http.get(this.apilink);
    }
}
