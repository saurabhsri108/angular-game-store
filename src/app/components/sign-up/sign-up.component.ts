import { Component, OnInit } from '@angular/core';
import { SignUpRequest } from 'src/app/interface/sign-up-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	username = '';
	email = '';
	password = '';
	readTerms = false;

	constructor(private auth: AuthService) {}

	ngOnInit(): void {}

	async signUp() {
		const submitData: SignUpRequest = {
			username: this.username,
			email: this.email,
			password: this.password,
			readTerms: this.readTerms,
		};
		try {
			const response = await this.auth.signUp(submitData);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}
}
