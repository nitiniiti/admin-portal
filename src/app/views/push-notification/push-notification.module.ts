import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushNotificationComponent } from './push-notification.component';
import { ProjectComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectComponentsModule
  ],
  declarations: [
    PushNotificationComponent
  ]
})
export class PushNotificationModule { }
