import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendPage } from './send';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SendPage,
  ],
  imports: [
    IonicPageModule.forChild(SendPage),
    ComponentsModule
  ],
})
export class SendPageModule {}
