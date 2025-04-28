import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';
 
@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss']
})
export class PropertyManagementComponent implements OnInit {
  propertySearchText: string = '';
propertyListOriginal: any[] = [];  
propertyList: any[] = [];   
 
  constructor(
    private router: Router, private propertyManagement: PropertyService,
    
        private propertyEditService : PropertyUploadFormService
  ) {}

  ngOnInit(): void {
    this.loadProperties(); 
  }
  loadProperties(): void {
    this.propertyManagement.fetchAllProperties().subscribe((res) => {
      this.propertyListOriginal = res.data;
      this.propertyList = [...res.data];
    })
  }

  filterProperties() {
    const search = this.propertySearchText.toLowerCase();
  
    this.propertyList = this.propertyListOriginal.filter(property =>
      property.agentName?.toLowerCase().includes(search) ||
      property.propertyName?.toLowerCase().includes(search)
    );
  }

  addNew(){
    this.router.navigate(['/admin/add-property']);
  }
 
  editProperty(property: any): void {
    this.router.navigate(['/admin/edit-property']);
    this.propertyEditService.setPropertyData(property);
  }
 
  deleteProperty(property: any): void {
    this.propertyManagement.deleteProperty(property).subscribe((res)=>{
      this.loadProperties(); 
    })
    }
  }
 