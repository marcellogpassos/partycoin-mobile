import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MainWalletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainWalletProvider {

  private static MAIN_WALLET_STORAGE_KEY: string = "mainWallet";

  constructor(private storage: Storage) {
    console.log('Hello MainWalletProvider Provider');
  }

  setMainWallet(hash: string): Promise<any> {
    return this.storage.set(MainWalletProvider.MAIN_WALLET_STORAGE_KEY, hash);
  }

  getMainWallet(): Promise<any> {
    return this.storage.get(MainWalletProvider.MAIN_WALLET_STORAGE_KEY);
  }

  logout(): Promise<any> {
    return this.storage.remove(MainWalletProvider.MAIN_WALLET_STORAGE_KEY);
  }

}
