import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
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
    private propertyService : PropertyService,
    private propertyEditService : PropertyUploadFormService
  ) { }

  ngOnInit(): void { 
    // const storedUserId = localStorage.getItem('userId');
    // this.userId = storedUserId !== null ? storedUserId : '';
    const storedUserId = sessionStorage.getItem('userId');
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
    console.log(property);
    
    this.propertyEditService.setPropertyData(property);
    this.router.navigate(['/agent/edit-property']);
   
  }

  deleteProperty(propertyId: any) {
  
    
    // console.log('Form Data:', propertyId);
    this.propertyService.deleteProperty(propertyId).subscribe((res)=>{
      console.log(res);
      this.fetchProperty();
    })
  }

}
