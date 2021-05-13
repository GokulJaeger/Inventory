import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DamageService {
  apiurl="http://localhost:3000/DamageStock";
  constructor(private _http: HttpClient) { }

  getdamageproducts(){
    return this._http.get(this.apiurl);
    }
    
  

}
