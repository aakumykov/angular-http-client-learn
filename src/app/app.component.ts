import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})

export class AppComponent {
	//private requestUri = 'https://api.github.com/users/aakumykov/repos'
	private requestUri = 'http://localhost/rus_gods.json'
	private res: any;

	constructor(private http: Http){}

	ngOnInit(){
		console.info('AppComponent.ngOnInit()');

		this.http.get(this.requestUri)
			//.map(res => res.json())
			.subscribe(
				res => {
					console.info('----- УСПЕХ -----');
					console.info(res);
					console.info('------------------');
				},
				error => {
					console.info('----- ОШИБКА -----');
					console.info(error.toString());
					console.info('------------------');
				},
				() => console.info('~~~~~~~ запрос выполнен ~~~~~~~')
			);
	}
}