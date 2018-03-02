import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionsPage } from './transactions';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionsPage),
    ComponentsModule
  ],
})
export class TransactionsPageModule {}
