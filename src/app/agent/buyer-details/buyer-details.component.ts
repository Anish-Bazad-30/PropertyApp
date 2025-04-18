import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss'],
})
export class BuyerDetailsComponent  implements OnInit {
  buyerName: string = '';
  contactNumber: string = '';
  email: string = '';
  salePrice: string = '';
  saleDate: string = '';

  constructor() { }

  ngOnInit() {}
  markSaleComplete(): void {
    if (
      !this.buyerName ||
      !this.contactNumber ||
      !this.email ||
      !this.salePrice ||
      !this.saleDate
    ) {
      return;
    }

    const saleDetails = {
      buyerName: this.buyerName,
      contactNumber: this.contactNumber,
      email: this.email,
      salePrice: this.salePrice,
      saleDate: this.saleDate
    };

    console.log('Sale Completed:', saleDetails);
  }
}

