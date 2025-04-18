import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent implements OnInit {
  searchText: string = '';
 
  propertyList = [
    {
      username: 'mayank@singh',
      propertyName: 'Lotus Residency - 2BHK,Deluxe Apartment',
      amount: '₹ 3.85 Cr'
    },
    {
      username: 'mayank@singh',
      propertyName: 'Lotus Residency - 2BHK,Deluxe Apartment',
      amount: '₹ 3.85 Cr'
    },
    {
      username: 'mayank@singh',
      propertyName: 'Lotus Residency - 2BHK,Deluxe Apartment',
      amount: '₹ 3.85 Cr'
    },
    {
      username: 'mayank@singh',
      propertyName: 'Lotus Residency - 2BHK,Deluxe Apartment',
      amount: '₹ 3.85 Cr'
    }
  ];
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
     
  }
  addNew(){
    console.log("Add New Property clicked");
  }
 
  editProperty(property: any): void {
    this.router.navigate(['/admin/edit-property'])
  }
 
  deleteProperty(property: any): void {
    console.log('Edit clicked for:', property);
    }
  }
 