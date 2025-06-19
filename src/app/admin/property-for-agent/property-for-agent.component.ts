import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-for-agent',
  templateUrl: './property-for-agent.component.html',
  styleUrls: ['./property-for-agent.component.scss'],
})
export class PropertyForAgentComponent  implements OnInit {

    propertySearchText: string = '';
  propertyListOriginal: any[] = [];  
  propertyList: any[] = []; 
  currentPage= 1;
  itemsPerPage= 10;  
   
    constructor(
      private router: Router, private propertyManagement: PropertyService,
      
          private propertyEditService : PropertyUploadFormService,
          private confirmService: ConfirmDialogService
    ) {}
  
    ngOnInit(): void {
      this.loadProperties(); 
    }
    loadProperties(): void {
      this.propertyManagement.fetchAllProperties().subscribe((res) => {
        this.propertyListOriginal = res.data;
        // this.propertyList = [...res.data];
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
      this.router.navigate(['/admin/add-property-for-agent']);
    }
   
    editProperty(property: any): void {
      this.router.navigate(['/admin/edit-property-for-agent']);
      this.propertyEditService.setPropertyData(property);
    }
   
    deleteProperty(property: any): void {
      
      this.confirmService
        .confirm('Confirm Deletion', 'Are you sure you want to delete this Property?')
        .subscribe((result) => {
          if (result) {
  
            this.propertyManagement.deleteProperty(property).subscribe((res)=>{
              this.loadProperties(); 
            })
          } else {
            // Deletion cancelled
            console.log('Deletion cancelled');
          }
        });
      }
      get propertyListview() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.propertyList.slice(startIndex, startIndex + this.itemsPerPage);
      }
     
      getTotalPages(): number {
        return Math.ceil(this.propertyList.length / this.itemsPerPage);
      }
     
      changePage(newPage: number) {
        if (newPage > 0 && newPage <= this.getTotalPages()) {
          this.currentPage = newPage;
        }
      }
    }
   
