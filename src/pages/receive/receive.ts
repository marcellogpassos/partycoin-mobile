import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsComponent, Tab } from '../../components/tabs/tabs';
import { Clipboard } from '@ionic-native/clipboard';
import { MainWalletProvider } from '../../providers/main-wallet/main-wallet';

/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {

  receiveTab: Tab = TabsComponent.TABS[1];

  walletAddress: string;

  elementType : 'url' | 'canvas' | 'img' = 'url';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clipboard: Clipboard,
    public toastCtrl: ToastController,
    protected mainWalletProvider: MainWalletProvider) {
    mainWalletProvider.getMainWallet().then(hash => {
      this.walletAddress = hash;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivePage');
  }

  copyWalletAddress() {
    this.clipboard.copy(this.walletAddress);
    this.showToast('Endereço da carteira copiado para a área de transferência.');
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 2400});
    toast.present();
  }

}
