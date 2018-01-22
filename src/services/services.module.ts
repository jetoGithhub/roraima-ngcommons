import { 
	NgModule, 
	ModuleWithProviders 
} from '@angular/core';

import { LocalStorageServices } from './localStorage.services';


@NgModule({
	providers: []
})
export class RoraimaServicesModule{
	static forRoot(): ModuleWithProviders{
		return {
			ngModule: RoraimaServicesModule,
			providers: [LocalStorageServices]
		}
	}
}