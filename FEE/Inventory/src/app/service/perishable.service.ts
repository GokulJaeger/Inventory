import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerishableService {
apilink="http://localhost:3000/PerishableProducts";
  constructor(private _http: HttpClient) { }
  getgoods(){
    return this._http.get(this.apilink);
    }
}
