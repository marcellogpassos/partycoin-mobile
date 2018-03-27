import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PartycoinProvider } from '../../providers/partycoin/partycoin';
import { Credentials } from '../../model/credentials';
import { HttpResponse } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials: Credentials;
  showPassword: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public partycoinProvider: PartycoinProvider,
    private storage: Storage) {
      this.credentials = new Credentials();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toggleShowPassword() {
    this.showPassword = this.showPassword;
  }

  login() {
    this.partycoinProvider.login(this.credentials)
      .subscribe((response: HttpResponse<any>) => {
        let authToken = response.headers.get("Authorization")
        this.storage.set("authToken", authToken).then(() => {
          this.navCtrl.setRoot("HomePage");
        });        
      }, error => {
        console.log(error);
      })
  }

}
