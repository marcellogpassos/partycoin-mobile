import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

import { Credentials } from "../../model/credentials";

/*
  Generated class for the PartycoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartycoinProvider {

  loginUrl: string = "http://localhost:8080/login";

  constructor(public http: HttpClient) {
    console.log('Hello PartycoinProvider Provider');
  }

  login(credentials: Credentials): Observable<HttpResponse<any>> {
    return this.http.post(this.loginUrl, credentials, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text',
      observe: 'response'
    });
  }

}