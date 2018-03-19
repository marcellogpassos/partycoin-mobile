import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tab, TabsComponent } from '../../components/tabs/tabs';
import { Clipboard } from '@ionic-native/clipboard';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  sendTab: Tab = TabsComponent.TABS[2];

  dstAddress: string;
  amount: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clipboard: Clipboard,
    public toastCtrl: ToastController,
    private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  scanQRCode() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        var ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0];
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something: ', text);
          this.dstAddress = text;
          this.stopScan(scanSub, ionApp)
        });
        ionApp.style.display = "none";
        this.qrScanner.show();
        setTimeout(() => this.stopScan(scanSub, ionApp), 6400);
      } else if (status.denied)
        this.showToast('Não foi possível ler o código QR. Permissão não concedida.');
      else {
        this.showToast('Não foi possível ler o código QR.');
        console.log('Status: ', status);
      }
    }).catch((error: any) => {
      this.showToast('Falha ao tentar ler o código QR.');
      console.log('Error: ', error);
    });
  }

  stopScan(scanSub, ionApp) {
    this.qrScanner.hide();
    scanSub.unsubscribe();
    ionApp.style.display = "block";
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({message: message, duration: 2400});
    toast.present();
  }

  getBalance(): number {
    return 120;
  }

  send() {
    console.log('sent');
  }

}
