import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'giftlist-dashboard',
  templateUrl: 'giftList.component.html'
})
export class GiftListComponent {
  constructor(
    private router: Router,
  ) { }

}
