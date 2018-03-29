import { AuthProvider } from '../providers/auth/auth';
import { NavController } from 'ionic-angular';

export abstract class InitAuthToken {

    public authToken: any;

    constructor(protected auth: AuthProvider, protected navCtrl: NavController) {
        this.initAuthToken();
    }

    initAuthToken() {
        this.auth.getAuthToken().then(authToken => {
            if (!authToken)
                this.navCtrl.setRoot("LoginPage");
            else {
                this.authToken = authToken;
                this.init();
            }
        });
    }

    abstract init();

}