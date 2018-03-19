import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';
import { BalanceComponent } from './balance/balance';

@NgModule({
	declarations: [TabsComponent,
    BalanceComponent],
	imports: [IonicModule],
	exports: [TabsComponent,
    BalanceComponent]
})
export class ComponentsModule {}
