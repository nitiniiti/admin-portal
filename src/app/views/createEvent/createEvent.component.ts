import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'createEvent.component.html'
})
export class CreateEventComponent {
  constructor(
    private router: Router,
  ) { }

}
