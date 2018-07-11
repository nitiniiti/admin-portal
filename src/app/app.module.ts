import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { RegisterComponent } from './views/register/register.component';
import { CreateGiftComponent } from './views/createGift/createGift.component';
import { GiftListComponent } from './views/giftList/giftList.component';
import { EventListComponent } from './views/eventList/eventList.component';
import { CreateEventComponent } from './views/createEvent/createEvent.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { SMSInviteComponent } from './views/earlyaccess/smsInvite.component';
import { EmailInviteComponent } from './views/earlyaccess/emailInvite.component';
import { GenerateInviteCodeComponent } from './views/earlyaccess/generateInviteCode.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    CreateGiftComponent,
    GiftListComponent,
    EventListComponent,
    CreateEventComponent,
    MonitoringComponent,
    SMSInviteComponent,
    EmailInviteComponent,
    GenerateInviteCodeComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
