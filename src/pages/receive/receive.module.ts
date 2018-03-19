import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivePage } from './receive';
import { ComponentsModule } from '../../components/components.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    ReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivePage),
    ComponentsModule,
    NgxQRCodeModule,
  ],
})
export class ReceivePageModule {}
