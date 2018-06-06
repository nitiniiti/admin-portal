import { Router } from '@angular/router';
import { ListGiftService } from './giftList.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'giftlist-dashboard',
  templateUrl: 'giftList.component.html'
})
export class GiftListComponent implements OnInit {
  constructor(
    private router: Router,
    private listGiftService: ListGiftService
  ) {

  }

  ngOnInit() {
    this.listGiftService.fetchGifts().subscribe((data: any) => {
      console.log(data);
      this.giftList = data.data.dataTemplates;
    });
  }

  giftList = []

}