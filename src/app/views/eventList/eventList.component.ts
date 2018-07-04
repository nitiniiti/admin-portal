import { Component, ViewChild } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'eventList.component.html'
})
export class EventListComponent {
	public uploader:FileUploader = new FileUploader({
		url:'http://localhost:3000/admin/upload'
	});
	private target: any;
	constructor() {
		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			if (this.target) this.target.value = '';
			if (status == 200) {
				alert('File uploaded successfully');
			} else {
				alert('Error while trying to upload the file');
			}
		};
	}
	@ViewChild('file') file;
	private selectedFile;

	downloadSampleCSVFile() {
		const data = [
			{
			  name: 'Customer 1 Name',
			  phone: '6612345890',
			  email: 'test1@gmail.com'
			},
			{
				name: 'Customer 2 Name',
				phone: '6612345891',
				email: 'test2@gmail.com'
			},
			{
				name: 'Customer 3 Name',
				phone: '6612345892',
				email: 'test3@gmail.com'
			},
		  ];  
		  return new Angular2Csv(data, 'CustomerInvitationFileSample');
	}

	onChange(event:any):void {
		this.target = event.target || event.srcElement;
	}
}
