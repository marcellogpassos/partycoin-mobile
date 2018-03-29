import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { MainWalletProvider } from '../providers/main-wallet/main-wallet';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthProvider,
    public mainWallet: MainWalletProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: this.rootPage },
      { title: 'Alterar Carteira', component: this.rootPage },
      { title: 'Meus Dados', component: this.rootPage },
      { title: 'Configurações', component: this.rootPage },
      { title: 'Sair', component: null },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.mainWallet.logout().then(() => {
      this.auth.logout().then(() => {
        this.nav.setRoot("LoginPage")
      });
    });
  }

  openPage(page) {
    if (!page.component)
      this.logout();
    else
      this.nav.setRoot(page.component);
  }
}
