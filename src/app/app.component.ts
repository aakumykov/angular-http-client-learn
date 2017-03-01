import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})

export class AppComponent {
	
	constructor(private http: Http){}

	//private requestUri = 'https://api.github.com/users/aakumykov/repos'
	private requestUri = 'http://localhost/rus_gods.json'
	public heroes;

	ngOnInit(){
		console.info('AppComponent.ngOnInit()');

		this.http.get(this.requestUri)
			.map(res => res.json())
			.subscribe(
				res => {
					console.info('----- УСПЕХ -----');
					console.info(res);
					console.info('------------------');
					this.heroes = res;
				},
				error => {
					console.info('----- ОШИБКА -----');
					console.info(error.toString());
					console.info('------------------');
				},
				() => console.info('~~~~~~~ запрос выполнен ~~~~~~~')
			);

		console.log('------------ this.heroes -----------');
		console.log(this.heroes);
		console.log('------------------------------------');
	}
}