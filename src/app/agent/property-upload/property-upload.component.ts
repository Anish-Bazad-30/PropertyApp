import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.component.html',
  styleUrls: ['./property-upload.component.scss']
})
export class PropertyUploadComponent implements OnInit {
  properties = [
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png' 
    },
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png'
    },
    {
      name: 'Lotus Residency - 2BHK Deluxe Apartment',
      address: 'Flat no. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru - 560095',
      amount: '3.85 Cr',
      image: 'assets/images/Apartment.png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  editProperty(property: any) {
    console.log('Edit property:', property);
  }

  deleteProperty(property: any) {
    console.log('Delete property:', property);
  }

}
