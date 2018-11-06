import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

    ngOnInit(): void {
        this.filterItem();
    }

    locale = 'en';

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
        created: {
            from: '',
            to: ''
        }

    };

    users = {
        count: 0,
        items: []
    };

    alerts: any[] = [];
     
    constructor(private http: HttpClient, private dateConfig: BsDatepickerConfig) { 
        this.dateConfig.containerClass = 'theme-blue'
        this.dateConfig.rangeInputFormat = 'MM/DD/YYYY';
        this.dateConfig.dateInputFormat = 'MM/DD/YYYY';
    }

    confirmResponse(event) {
        console.log(event + ' test')
    }

    SendPushNotification() {

        if (this.pushNotificationData.titleEn === '') {
            this.showAlert('danger', 'English Title must be filled', 8000)
            return
        }
        if (this.pushNotificationData.titleAr === '') {
            this.showAlert('danger', 'Arabic Title must be filled', 8000)
            return
        }
        if (this.pushNotificationData.messageEn === '') {
            this.showAlert('danger', 'Enlish Message must be filled', 8000)
            return
        }
        if (this.pushNotificationData.messageAr === '') {
            this.showAlert('danger', 'Arabic Message must be filled', 8000)
            return
        }

        if (window.confirm('are you sure you want to send notification')) {
            Object.assign(this.pushNotificationData, {sendNotification: true});
        }
        this.filterItem();
        // alert(JSON.stringify(this.pushNotificationData));
    }

    onAlertClosed(dismissedAlert: AlertComponent): void {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

    showAlert(type: string, msg: string, timeout: number): void {
        this.alerts.push({type: type, msg: msg, timeout: timeout});
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

}
