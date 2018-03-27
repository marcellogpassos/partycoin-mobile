import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Tab, TabsComponent } from '../../components/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeTab: Tab = TabsComponent.TABS[0];

  constructor(
    public navCtrl: NavController,
    private storage: Storage) {
      this.storage.get('authToken').then((authToken) => {
        if (!authToken)
          this.navCtrl.setRoot("LoginPage");
        else
          console.log('Token: ', authToken);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getBalance(): number {
    return 120;
  }

}