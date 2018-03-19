import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello BalanceComponent Component');
    this.text = 'Hello World';
  }

  getBalance(): number {
    return 120;
  }

}
