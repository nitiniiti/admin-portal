import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ListGiftService {

    constructor(private http: HttpClient, ) { }

    fetchGifts() {
        console.log('fetching gifts');
        return this.http.get(environment.apiBaseUrl + 'gift/fetchTemplates')
    }

}