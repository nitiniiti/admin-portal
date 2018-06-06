import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CreateGiftService {

    constructor(private http: HttpClient, ) { }

    saveGift(data) {
        console.log(data);
        return this.http.post(environment.apiBaseUrl + 'gift', data)
    }

}