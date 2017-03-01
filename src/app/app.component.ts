import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})

export class AppComponent {
	//private requestUri = 'https://api.github.com/users/aakumykov/repos'
	// private requestUri = 'http://localhost/rus_gods.json'

	ngOnInit(){
		console.info('AppComponent.ngOnInit()');
	}
}