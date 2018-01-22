import { 
	NgModule, 
	ModuleWithProviders 
} from '@angular/core';

@NgModule({
	declarations: [],
	exports: []
	
})
export class RoraimaValidatorsModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: RoraimaValidatorsModule,
			providers: []
		}
	}
}