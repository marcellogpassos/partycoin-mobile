import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Tab, TabsComponent } from '../../components/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeTab: Tab = TabsComponent.TABS[0];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getBalance(): number {
    return 120;
  }

}