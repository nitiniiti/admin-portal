import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CreateGiftService } from './createGift.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'createGift.component.html'
})
export class CreateGiftComponent {
  @ViewChild('file') file;
  public files: Set<File> = new Set();
  constructor(
    private router: Router,
    private createGiftService: CreateGiftService
  ) { }

  giftTitle;
  giftType;
  image;
  giftData;
  giftPrice;
  errorMessage;



  saveImage() {
    this.errorMessage = false;
    if (this.giftTitle && this.giftData && this.giftPrice && this.giftType && this.image) {

      let giftObject = {
        giftTitle: this.giftTitle,
        giftType: this.giftType,
        giftData: this.giftData,
        giftPrice: this.giftPrice,
        image: this.image
      }
      console.log(giftObject);
      this.createGiftService.saveGift(giftObject).subscribe((data: any) => {
        this.giftTitle = '';
        this.giftType = '';
        this.image = '';
        this.giftData = '';
        this.giftPrice = '';
        console.log(data);
        alert(data.data.message);

      })
    } else {
      this.errorMessage = true;
    }
  }

  fileChange() {
    /* console.log(files);

    this.image = files[0].nativeElement; */

    /*  const elem = event.target;
     if (elem.files.length > 0) {
       console.log(elem.files[0]);
     } */

    const files: { [key: string]: File } = this.file.nativeElement.files;
    console.log(files);
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }

    console.log(this.files);
  }

}
