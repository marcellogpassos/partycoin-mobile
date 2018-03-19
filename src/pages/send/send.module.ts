import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendPage } from './send';
import { ComponentsModule } from '../../components/components.module';
import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    SendPage,
  ],
  imports: [
    IonicPageModule.forChild(SendPage),
    ComponentsModule
  ],
  providers: [
    QRScanner
  ]
})
export class SendPageModule {}
