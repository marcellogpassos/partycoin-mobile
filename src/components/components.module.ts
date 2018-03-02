import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs';

@NgModule({
	declarations: [TabsComponent],
	imports: [IonicModule],
	exports: [TabsComponent]
})
export class ComponentsModule {}
