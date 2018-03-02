import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivePage } from './receive';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivePage),
    ComponentsModule
  ],
})
export class ReceivePageModule {}
