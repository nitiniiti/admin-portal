import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor(private http: HttpClient, ) { }

    login(loginData) {
        console.log('login');
        return this.http.post(environment.apiBaseUrl + 'login', loginData)
    }

}