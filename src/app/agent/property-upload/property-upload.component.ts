import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.component.html',
  styleUrls: ['./property-upload.component.scss']
})
export class PropertyUploadComponent implements OnInit {
  properties = [
    {
      name: 'Property Name',
      title: '4 BHK with Terrace/Basement with Utility',
      price: 'Starting: Rs. 5.45 Cr*',
      image: 'assets/images/property-upload.png'
    },
    {
      name: 'Property Name',
      title: '3 BHK with Terrace/Basement with Utility',
      price: 'Starting: Rs. 3.45 Cr*',
      image: 'assets/images/property-upload.png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  editProperty(property: any) {
    console.log('Edit property:', property);
    // Implement edit functionality here
  }

  deleteProperty(property: any) {
    console.log('Delete property:', property);
    // Implement delete functionality here
  }

  goForward(property: any) {
    console.log('Go forward:', property);
    // Implement forward navigation here
  }

  goBackward(property: any) {
    console.log('Go backward:', property);
    // Implement backward navigation here
  }
}
