import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss'],
})
export class MapDetailsComponent  implements OnInit {
  propertyDetail: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.propertyDetail = [
      {
        name: 'Lotus Residency - 2BHK Deluxe Apartment',
        ownerMobile: '+91 9878987654'
      },
      {
        name: 'Lotus Residency - 2BHK Deluxe Apartment',
        ownerMobile: '+91 9878987654'
      }
    ];
  }

  callNow(mobileNumber: string): void {
    window.location.href = `tel:${mobileNumber}`;
  }
}