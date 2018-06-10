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
        var headers = new HttpHeaders();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append("Accept", 'multipart/form-data');
        /* return this.http.post(environment.apiBaseUrl + 'gift', data, {
            headers: new HttpHeaders().set('Content-Type', 'multipart/form-data'),
        }) */

        return this.http.post(environment.apiBaseUrl + 'gift', data)
    }

}