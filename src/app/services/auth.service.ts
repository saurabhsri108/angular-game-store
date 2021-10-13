import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUpRequest } from '../interface/sign-up-request';
import { SignUpResponse, SignUpResponseError } from '../interface/sign-up-response';

const headerOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	signUp(data: SignUpRequest): Observable<SignUpResponse | SignUpResponseError> {
		return this.http.post(`${API_URL}/users`, data, headerOptions);
	}
}
