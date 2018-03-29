import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { Tab, TabsComponent } from '../../components/tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { InitAuthToken } from '../init-auth-token';
import { PartycoinProvider } from '../../providers/partycoin/partycoin';
import { User } from '../../model/user';
import { Wallet } from '../../model/wallet';
import { MainWalletProvider } from '../../providers/main-wallet/main-wallet';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends InitAuthToken {
  
  homeTab: Tab = TabsComponent.TABS[0];

  public user: User;
  public mainWallet: Wallet;
  public wallets: Wallet[];

  constructor(protected auth: AuthProvider, protected navCtrl: NavController,
    protected partycoinProvider: PartycoinProvider, private alertCtrl: AlertController,
    protected mainWalletProvider: MainWalletProvider) {
    super(auth, navCtrl);
  }

  init() {
    this.listWallets();
    this.loadUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  listWallets() {
    this.partycoinProvider.listWallets(this.authToken)
      .subscribe((wallets: Wallet[]) => {
        this.wallets = wallets;
        this.chooseMainWallet();
      }, error => console.log(error));
  }

  loadUserData() {
    this.partycoinProvider.loadUserData(this.authToken)
      .subscribe((user: User) => {
        this.user = user;
      }, error => console.log(error));
  }

  chooseMainWallet() {
    if (this.wallets.length == 0) 
      this.presentAlertCreateWallet();
    else if (this.wallets.length == 1) {
      this.mainWallet = this.wallets[0];
      this.mainWalletProvider.setMainWallet(this.mainWallet.hash);
    } else {
      this.mainWalletProvider.getMainWallet().then(hash => {
        if (hash) {
          let wallet: Wallet = this.getWalletByHash(hash);
          if (wallet) 
            this.mainWallet = wallet;
          else
            this.presentAlertChooseMainWallet();  
        } else
          this.presentAlertChooseMainWallet();
      });
    }
  }

  presentAlertCreateWallet() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Nenhuma carteira cadastrada!');
    alert.present();
    alert.addButton({
      text: 'Criar Carteira',
      handler: data => {
        this.createWallet();
      }
    });
    return;
  }

  presentAlertChooseMainWallet() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione a carteira padrão:');
    for(let wallet of this.wallets) {
      alert.addInput({
        type: 'radio',
        label: this.getWalletLabel(wallet),
        value: wallet.hash,
        checked: false
      });
    }
    alert.addButton({
      text: 'Confirmar',
      handler: data => {
        this.mainWallet = this.getWalletByHash(data);
        this.mainWalletProvider.setMainWallet(data);
      }
    });
    alert.present();
  }

  getWalletLabel(wallet: Wallet): string {
    return wallet.hash.substring(0, 8) + "...";
  }

  getWalletByHash(hash: string): Wallet {
    for(let wallet of this.wallets) 
      if (wallet.hash == hash)
        return wallet;
    return null;
  }

  createWallet() {

  }

}