import { Injectable } from "@angular/core";
import { BaseStorage, storage } from "@roraima/core";

@Injectable()
export class LocalStorageServices extends storage{
	constructor(){
		super('memory');
		console.log('run local storage provider');
	}

	set(key, value){
		super.set(key, value);
	}

	get(key){
		super.get(key);
	}
}
