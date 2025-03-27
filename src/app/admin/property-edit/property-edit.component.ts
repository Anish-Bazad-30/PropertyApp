import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent implements OnInit {
  property: any;

  constructor() {}

  ngOnInit(): void {
    this.property = {
      name: 'Sarah Homes',
      address: 'Sector 37, Gurgaon',
      status: 'Active',
      owner: 'Sarah Group',
      totalVisit: 14,
      peopleInterested: 4
    };
  }

  edit() {
    console.log('Edit button clicked');
  }

  cancel() {
    console.log('Cancel button clicked');
  }
}
