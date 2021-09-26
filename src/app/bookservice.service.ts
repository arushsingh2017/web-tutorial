import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from './bookclass';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  // apiurl='https://jsonplaceholder.typicode.com/photos';
  
  apiurl='http://auth.indiaseva.net/api/auth/getstate';
  

  constructor( private _http:HttpClient) { }


  getuser(){
    return this._http.get<book[]>(this.apiurl);
  }
}
