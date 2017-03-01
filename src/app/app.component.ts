import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})

export class AppComponent implements OnInit {
	//private requestUri = 'https://api.github.com/users/aakumykov/repos'
	private requestUri = 'http://localhost/rus_gods.json'

	ngOnInit(){
		console.info('AppComponent.ngOnInit()');
	}


}