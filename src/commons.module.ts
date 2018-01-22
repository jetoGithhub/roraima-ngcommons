import { NgModule } from '@angular/core';
import { RoraimaComponentsModule } from './components/components.module';
import { RoraimaDirectivesModule } from './directives/directives.module';
import { RoraimaServicesModule } from './services/services.module';
import { RoraimaValidatorsModule } from './validators/validators.module';

@NgModule({
	imports: [
		RoraimaComponentsModule.forRoot(),
		RoraimaDirectivesModule.forRoot(),
		RoraimaServicesModule.forRoot(),
		RoraimaValidatorsModule.forRoot(),
	],
	exports: [
		RoraimaComponentsModule,
		RoraimaDirectivesModule,
		RoraimaServicesModule,
		RoraimaValidatorsModule
	]
	
})
export class CommonsModule{}
