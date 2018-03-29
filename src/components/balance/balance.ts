import { Component, Input } from '@angular/core';
import { PartycoinProvider } from '../../providers/partycoin/partycoin';

/**
 * Generated class for the BalanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'balance',
  templateUrl: 'balance.html'
})
export class BalanceComponent {

  private _wallet: string;
  private _authToken: any;

  balance: number;
  
  constructor(private partycoin: PartycoinProvider) {
    console.log('Hello BalanceComponent Component');
  }

  @Input()
  set wallet(wallet: string) {
    this._wallet = wallet;
    this.updateBalance();
  }

  get wallet() {
    return this._wallet;
  }

  @Input()
  set authToken(authToken: any) {
    this._authToken = authToken;
    this.updateBalance();
  }

  get authToken() {
    return this._authToken;
  }

  updateBalance() {
    if (this._wallet && this._authToken)
      this.partycoin.getBalance(this.wallet, this.authToken)
        .subscribe((response: any) => {
          this.balance = response.balance
        });
  }

}
