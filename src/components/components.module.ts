import { 
	NgModule, 
	ModuleWithProviders 
} from '@angular/core';
import { TepuyMessages } from './messages/messages.component';


@NgModule({
	declarations: [
		TepuyMessages
	],
	exports: [
		TepuyMessages
	]	
})
export class RoraimaComponentsModule{

	static forRoot(): ModuleWithProviders{
		return {
			ngModule: RoraimaComponentsModule,
			providers: []
		}
	}
}
