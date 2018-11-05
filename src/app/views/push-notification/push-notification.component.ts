import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

    pushNotificationData = {
        titleEn : '',
        titleAr : '',
        messageEn: '',
        messageAr: '',
        language: '',
        phone_type: '',
        app_version: '',
        status: '',
        hasSentGift: '',
        created: {}

    };

    users = {
        count: 0,
        items: []
    };


    SendPushNotification() {

        if (window.confirm('are you sure you want to send notification')) {
            Object.assign(this.pushNotificationData, {sendNotification: true});
        }
        this.filterItem();
        // alert(JSON.stringify(this.pushNotificationData));
    }

    filterItem(payload?) {

        let finalPayload;
        if (payload) {
            finalPayload = payload;
        } else {
            finalPayload = this.pushNotificationData;
        }

        this.http.post(environment.apiBaseUrl + 'users', finalPayload).subscribe((res) => {

            this.users.count = res['data'].count;
            this.users.items = res['data'].users;
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }


    constructor(private http: HttpClient, ) { }

  ngOnInit() {


  }

}
