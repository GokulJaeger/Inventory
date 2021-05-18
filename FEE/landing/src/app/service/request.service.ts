import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apiurl="http://localhost:3000/RequestProducts";
  constructor(private _http: HttpClient) { }

  getproducts(){
  return this._http.get(this.apiurl);
  }
  

}


