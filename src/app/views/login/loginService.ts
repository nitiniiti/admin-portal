import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor(private http: HttpClient, private auth: AuthService) { 
    }

    login(loginData) {
        return this.auth.login(loginData.username, loginData.password)
    }

}