import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemServices {

  constructor(private _http: HttpClient) { }

  addItem(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/items', data);
  }
}
