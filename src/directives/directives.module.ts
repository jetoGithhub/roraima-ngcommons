import { 
	NgModule, 
	ModuleWithProviders 
} from '@angular/core';

@NgModule({
	declarations: [],
	exports: []
	
})
export class RoraimaDirectivesModule{
	static forRoot(): ModuleWithProviders{
		return {
			ngModule: RoraimaDirectivesModule,
			providers: []
		}
	}
}