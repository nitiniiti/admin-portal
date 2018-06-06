import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateGiftService } from './createGift.service';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'createGift.component.html'
})
export class CreateGiftComponent {
  constructor(
    private router: Router,
    private createGiftService: CreateGiftService
  ) { }

  giftTitle;
  giftType;
  imageUrl;
  giftData;
  giftPrice;



  saveImage() {
    let giftObject = {
      giftTitle: this.giftTitle,
      giftType: this.giftType,
      giftData: this.giftData,
      giftPrice: this.giftPrice
    }
    console.log(giftObject);
    this.createGiftService.saveGift(giftObject).subscribe((data: any) => {
      console.log(data);
      alert(data.data.message);
    })
  }

}
