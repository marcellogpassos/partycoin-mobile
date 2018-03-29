import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private static AUTH_TOKEN_STORAGE_KEY: string = "authToken";

  constructor(private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  login(authToken: String): Promise<any> {
    return this.storage.set(AuthProvider.AUTH_TOKEN_STORAGE_KEY, authToken);
  }

  logout(): Promise<any> {
    return this.storage.remove(AuthProvider.AUTH_TOKEN_STORAGE_KEY);
  }

  getAuthToken(): Promise<any> {
    return this.storage.get(AuthProvider.AUTH_TOKEN_STORAGE_KEY);
  }

}
