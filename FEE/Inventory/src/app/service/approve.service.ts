import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {
  apiurl="http://localhost:3000/ApproveStock";
  constructor(private _http: HttpClient) { }
  appoveproducts(){
    return this._http.get(this.apiurl);
    }
}
