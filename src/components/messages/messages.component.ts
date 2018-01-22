import { 
	Component, 
	Input 
} from '@angular/core';

@Component({
	selector: 'tepuy-messages',
	template: `
		<p>{{text}}</p>
	`,
})
export class TepuyMessages{
	
	@Input() text: string;
	
	constructor(){}
}
