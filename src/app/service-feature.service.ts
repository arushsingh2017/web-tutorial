import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ FeatureClass } from './feature-class';

@Injectable({
  providedIn: 'root'
})
export class ServiceFeatureService {
  apiurl_comment='https://jsonplaceholder.typicode.com/comments';

  constructor( private _featureservice: HttpClient) { }
  getfeaturedata()
  {
    return this._featureservice.get<FeatureClass[]>(this.apiurl_comment) ;
   
  }
  
}
