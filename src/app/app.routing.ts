import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CreateGiftComponent } from './views/createGift/createGift.component';
import { GiftListComponent } from './views/giftList/giftList.component';
import { EventListComponent } from './views/eventList/eventList.component';
import { CreateEventComponent } from './views/createEvent/createEvent.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'create-gift',
        component: CreateGiftComponent,
        data: {
          title: 'Gift Shop'
        }
      },
      {
        path: 'gift-list',
        component: GiftListComponent,
        data: {
          title: 'List Gift'
        }
      },
      {
        path: 'monitoring',
        component: MonitoringComponent,
        data: {
          title: 'Monitoring'
        }
      },
      {
        path: 'show-events',
        component: EventListComponent,
        data: {
          title: 'Event List'
        }
      },
      {
        path: 'add-event',
        component: CreateEventComponent,
        data: {
          title: 'Create Event'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
