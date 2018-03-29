import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';
import { BalanceComponent } from './balance/balance';
import { PartycoinProvider } from '../providers/partycoin/partycoin';

@NgModule({
	declarations: [TabsComponent,
    BalanceComponent],
	imports: [
		IonicModule
	],
	exports: [
		TabsComponent,
		BalanceComponent
	],
	providers: [
		PartycoinProvider
	]
})
export class ComponentsModule {}
