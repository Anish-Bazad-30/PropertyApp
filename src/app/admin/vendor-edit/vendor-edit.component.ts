import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  vendorInfo: any;

  constructor() {
    this.vendorInfo = {
      name: 'A K Enterprise',
      category: 'Plumbing',
      referredBy: 'User A',
      status: 'Active',
      contact: '9999999999',
      serviceCount: 16
    };
  }

  ngOnInit(): void {}

  edit(): void {
    console.log('Edit button clicked');
  }

  cancel(): void {
    console.log('Cancel button clicked');
  }
}
