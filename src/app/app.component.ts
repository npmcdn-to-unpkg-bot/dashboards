import { Component, DynamicComponentLoader, ElementRef, Injector, OnInit } from '@angular/core';
import {WidgetComponent1} from './widget1.component';
import {WidgetComponent2} from './widget2.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private dcl: DynamicComponentLoader, private injector: Injector){
		
	}

	ngOnInit(){

		this.dcl.loadAsRoot(WidgetComponent2, '#child', this.injector);
	}
 }
