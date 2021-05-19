import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificatonService {
  apiurl = 'http://localhost:3000/notification';
  constructor(private _http: HttpClient) {}

  getAlerts() {
    return this._http.get(this.apiurl);
  }
}
