import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'createGift.component.html'
})
export class CreateGiftComponent {
  constructor(
    private router: Router,
  ) { }

}
