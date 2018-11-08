import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { PushNotificationService } from '../../services';

import { FilterReciversResponse } from '../../models'

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

    ngOnInit(): void {
        this.filterItem();
    }

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
        openStore: 'false',
        url: null,
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
    urlTemplate: boolean = true
    isCollapsed = true
     
    constructor(private dateConfig: BsDatepickerConfig, private push: PushNotificationService) { 
        this.dateConfig.containerClass = 'theme-blue'
        this.dateConfig.rangeInputFormat = 'MM/DD/YYYY';
        this.dateConfig.dateInputFormat = 'MM/DD/YYYY';
    }

    confirmResponse(event) {
        console.log(event + ' test')
    }

    showUrlTemplete(event) {
        if (event) {
            this.urlTemplate = event
            this.pushNotificationData.openStore = 'false'
        } else {
            this.urlTemplate = event
            this.pushNotificationData.openStore = 'true'
        }
        this.filterItem()
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

        if (this.pushNotificationData.url != null) {
            if (this.pushNotificationData.url != '') {
                let expression = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}?/gi;
                var regex = new RegExp(expression);
                if (!this.pushNotificationData.url.match(regex)) {
                    this.showAlert('warning', 'Url is not correct.', 8000)
                    return
                }
            }
        }

        if (!this.urlTemplate) {
            this.pushNotificationData.url = null
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
        this.push.filterRecivers(finalPayload).subscribe((filter: FilterReciversResponse) => {
            this.users.count = filter.data.count
            this.users.items  = filter.data.users
        })
        Object.assign(this.pushNotificationData, {sendNotification: false});
    }

}
