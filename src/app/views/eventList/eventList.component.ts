import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'eventList.component.html'
})
export class EventListComponent {
  constructor(
    private router: Router,
  ) { }

}
