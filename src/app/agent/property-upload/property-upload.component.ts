import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.component.html',
  styleUrls: ['./property-upload.component.scss']
})
export class PropertyUploadComponent implements OnInit {
  properties :any[]=[];
  userId!: any;

  constructor(
    private router : Router,
    private propertyService : PropertyService
  ) { }

  ngOnInit(): void { 
    const storedUserId = localStorage.getItem('userId');
    this.userId = storedUserId !== null ? storedUserId : '';
    this.fetchProperty();
  }


  fetchProperty(){
    this.propertyService.getProperties(this.userId).subscribe((res)=>{
      this.properties= res.data;
      console.log(this.properties);
      
    })
  }
  addNew(){
    this.router.navigate(['/agent/upload-property'])
  }
  finalizeSale(property: any) {
    this.router.navigate(['/agent/buyer-details']);
  }

  editProperty(property: any) {
    this.router.navigate(['/agent/edit-property']);
  }

  deleteProperty(property: any) {
    console.log('Delete property:', property);
  }

}
