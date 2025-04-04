import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail-view',
  templateUrl: './property-detail-view.component.html',
  styleUrls: ['./property-detail-view.component.scss'],
})

export class PropertyDetailViewComponent implements OnInit {
  propertyTitle = 'Lotus Residency - 2BHK Deluxe Apartment';
  propertyAddress = `Flat No. 5A, Lotus Residency, 
    MG Road, Koramangala, 
    Bengaluru, Karnataka - 560095`;
  propertyAmount = '3.85 Cr';
  propertyDescription = `Description: A spacious and well-ventilated 2BHK apartment 
    located in the prime area of Koramangala. 
    The property features two bedrooms, two modern bathrooms, 
    a modular kitchen, a large living room with balcony access, 
    and covered car parking. Residents can enjoy amenities like a gym, 
    children's play area, 24x7 security, power backup, and a landscaped garden. 
    Ideal for professionals, families, and anyone looking for 
    convenience and comfort in the heart of Bengaluru.`;

  constructor() {}

  ngOnInit(): void {}

  callNow() {
    alert('Calling agent...');
  }
}
