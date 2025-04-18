import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-properties-views',
  templateUrl: './properties-views.component.html',
  styleUrls: ['./properties-views.component.scss'],
})
export class PropertiesViewsComponent  implements OnInit {
  username: string = 'mayank@103';
  properties = [
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png',
      views: '72'
    },
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png',
      views: '72'
    },
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png',
      views: '72'
    }
  ];
 
  constructor() { }
 
  ngOnInit(): void { }
 
  addNew(){
    console.log("New Property");
  }
 
}
 