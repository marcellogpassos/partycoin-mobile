import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { PartycoinProvider } from '../../providers/partycoin/partycoin';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    PartycoinProvider
  ]
})
export class LoginPageModule {}
