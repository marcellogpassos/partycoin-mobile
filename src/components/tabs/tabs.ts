import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface Tab {
  id: number;
  name: string;
  icon: string;
  page: string;
}

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  static TABS: Tab[] = [
    {id: 1, name: "home", icon: "fas fa-home", page: "HomePage"},
    {id: 2, name: "receive", icon: "fas fa-arrow-circle-down", page: "ReceivePage"},
    {id: 3, name: "send", icon: "fas fa-arrow-circle-up", page: "SendPage"},
    {id: 4, name: "transactions", icon: "fas fa-list", page: "TransactionsPage"},
  ];
  tabs: Tab[] = TabsComponent.TABS;
  
  @Input()
  active: Tab;

  constructor(public navCtrl: NavController) {
  }

  navigate(tab: Tab) {
    if (this.active != tab)
      this.navCtrl.setRoot(tab.page);    
  }

}
