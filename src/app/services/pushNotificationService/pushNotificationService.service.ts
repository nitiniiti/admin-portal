import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FilterReciversResponse } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class PushNotificationService {
    constructor(private http: HttpClient) {}

    /**
     * Filter recivere and send notification reuiest 
     * must specified {sendNotification: true} with payload to send broudcast
     */
    filterRecivers(payload?) {
        return this.http.post<FilterReciversResponse>(`${environment.apiBaseUrl}users/`, payload)
        .pipe(map(res => {
            return res;
        }));
    }
}