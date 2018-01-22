import { Component, OnInit } from '@angular/core';
import { LocalStorageServices } from '../../../index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  messages = 'Mensage sobre un componente de shared module';

  constructor(private localStorage: LocalStorageServices){}

  ngOnInit(){
  	this.localStorage.set('test','add local storage');
  	console.log('local storage AppComponent -->', this.localStorage.get('test'));
  }
}
