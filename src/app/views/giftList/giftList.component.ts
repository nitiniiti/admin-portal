import { Router } from '@angular/router';
import { ListGiftService } from './giftList.service';
import { CreateGiftService } from '../createGift/createGift.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'giftlist-dashboard',
  templateUrl: 'giftList.component.html'
})
export class GiftListComponent implements OnInit {
  constructor(
    private router: Router,
    private listGiftService: ListGiftService,
    private createGiftService: CreateGiftService
  ) {

  }

  giftList = [];

  ngOnInit() {
    this.listGiftService.fetchGifts().subscribe((data: any) => {
      console.log(data);
      data.data.dataTemplates.forEach(element => {
        element['readonly'] = true;
      });
      this.giftList = data.data.dataTemplates;
    });
  }

  editGift(gift) {
    gift.readonly = false;
  }

  saveGift(gift) {
    gift.readonly = true;
    this.createGiftService.saveGift(gift).subscribe((data: any) => {
      console.log(data);
    })
  }

  removeGift(gift, i) {
    console.log(gift);
    console.log(i);
    this.giftList.splice(i, 1);
    this.listGiftService.removeGift(gift).subscribe((data: any) => {
      console.log(data);
    })
  }

}