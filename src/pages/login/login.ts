import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartycoinProvider } from '../../providers/partycoin/partycoin';
import { Credentials } from '../../model/credentials';
import { HttpResponse } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';

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
    private auth: AuthProvider) {
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
        let authToken = response.headers.get("Authorization");
        this.auth.login(authToken).then(() => {
          this.navCtrl.setRoot("HomePage");
        });        
      }, error => {
        console.log(error);
      })
  }

}
