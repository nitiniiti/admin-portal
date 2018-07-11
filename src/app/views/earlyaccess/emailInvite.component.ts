import { Component, ViewChild } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { FileUploader } from 'ng2-file-upload';
import { EarlyAccessService } from './earlyAccess.service';

@Component({
  selector: 'gift-dashboard',
  templateUrl: 'emailInvite.component.html'
})
export class EmailInviteComponent {
	public uploader:FileUploader = new FileUploader({
		url:'http://localhost:3000/admin/upload/email',
		allowedMimeType: ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] 
	});
	noOfPasses: number = 0;
	private target: any;
	constructor(private earlyAccessService: EarlyAccessService) {
		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			if (this.target) this.target.value = '';
			const resp = JSON.parse(response);
			alert(resp.message);
		};
		this.uploader.onBeforeUploadItem = (item) => {
			item.withCredentials = false;
		}
	}
	@ViewChild('file') file;
	private selectedFile;

	downloadSampleCSVFile() {
		const data = [
			{
				name: 'Name',
				phone: 'Phone',
				email: 'Email'
			},
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

	downloadExcel(event:any) {
		if (!this.noOfPasses || isNaN(this.noOfPasses) || Math.floor(this.noOfPasses) === 0) {
			alert('Please enter a positive number');
			return;
		}
		const noOfPasses = Math.floor(this.noOfPasses);
		const target = event.target || event.srcElement;
		this.earlyAccessService.getPasscodes(noOfPasses).subscribe((data: any) => {
			if (data && data.data) {
				const passcodes = data.data.split(',');
				const csvData = [];
				passcodes.forEach(element => {
					csvData.push({ name: element });
				});
				return new Angular2Csv(csvData, 'InvitationCodes');
			}
		}, (err) => {
			alert('Could not get invite codes, Please try again!');
		})
	}
}
