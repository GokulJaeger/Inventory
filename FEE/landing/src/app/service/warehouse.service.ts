import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  apilink="http://localhost:3000/Inwarehousestock";
  constructor(private _http: HttpClient) { }

  getwaregoods(){
    return this._http.get(this.apilink);
    }
}
