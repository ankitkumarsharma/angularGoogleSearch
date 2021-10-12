import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BASE_URL } from '../app.constant';
import { searchModel } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = BASE_URL;
  constructor(private _http: HttpClient) {}

  getData(payload: any) {
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
      .set('engine', payload['engine'])
      .set('q', payload['q'])
      .set('api_key', payload['api_key']);
    return this._http.get(this.baseUrl, { headers: headers, params: params });
  }
  getNewsData(payload: any) {
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
      .set('q', payload['q'])
      .set('tbm', payload['tbm'])
      .set('location', payload['location'])
      .set('api_key', payload['api_key']);
    return this._http.get(this.baseUrl, { headers: headers, params: params });
  }
}
