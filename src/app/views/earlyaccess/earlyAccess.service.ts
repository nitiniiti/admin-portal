import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EarlyAccessService {

    constructor(private http: HttpClient, ) { }

    getPasscodes(noOfPasses) {
        var headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/admin/fetchPasscodes/'+noOfPasses);
    }

}