import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx";

import { Credentials } from "../../model/credentials";
import { Wallet } from "../../model/wallet";
import { User } from "../../model/user";
import { UserConverter } from '../../converters/user.converter';
import { WalletConverter } from '../../converters/wallet.converter';

/*
  Generated class for the PartycoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartycoinProvider {

  loginUrl: string = "http://localhost:8080/login";
  balanceUrl: string = "http://localhost:8080/wallets/{0}/balance";
  userDataUrl: string = "http://localhost:8080/users/my-data";
  listWalletsUrl: string = "http://localhost:8080/wallets";

  constructor(public http: HttpClient, public userConverter: UserConverter, public walletConverter: WalletConverter) {
    console.log('Hello PartycoinProvider Provider');
  }

  login(credentials: Credentials): Observable<HttpResponse<any>> {
    return this.http.post(this.loginUrl, credentials, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text',
      observe: 'response'
    });
  }

  getBalance(walletHash: string, authToken) {
    let url = this.balanceUrl.replace("{0}", walletHash);
    return this.http.get(url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', authToken)
    });
  }

  listWallets(authToken): Observable<Wallet[]>  {
    return this.http.get<Wallet[]>(this.listWalletsUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', authToken)
    }).map(response => {
      let wallets: Wallet[] = [];
      for(let dados of response) 
        wallets.push(this.walletConverter.to(dados));
      return wallets;
    });
  }

  loadUserData(authToken): Observable<User> {
    return this.http.get<User>(this.userDataUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', authToken)
    }).map(response => {
      return this.userConverter.to(response);
    });
  }

}