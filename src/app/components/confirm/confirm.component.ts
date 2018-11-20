import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ConfirmResponse } from '../../models/ConfirmResponse.model'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Output() confirmResponse: EventEmitter<ConfirmResponse>
  confirmModel = {} as ConfirmResponse
  modalRef: BsModalRef;
  message: string;

  constructor(private modalService: BsModalService) { }

   
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.modalRef.hide();
    this.confirmModel.confirm = true
    this.confirmModel.cancel = false
    this.confirmResponse.emit(this.confirmModel)
    
  }
 
  cancel(): void {
    this.modalRef.hide();
    this.confirmModel.confirm = false
    this.confirmModel.cancel = true
    this.confirmResponse.emit(this.confirmModel)
    
  }
  
  ngOnInit() {
  }

}
