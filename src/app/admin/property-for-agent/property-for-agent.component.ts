import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-property-for-agent',
  templateUrl: './property-for-agent.component.html',
  styleUrls: ['./property-for-agent.component.scss'],
})
export class PropertyForAgentComponent implements OnInit {

  propertySearchText: string = '';
  propertyListOriginal: any[] = [];
  propertyList: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  userId: any;

  constructor(
    private router: Router, private propertyManagement: PropertyService,
    private storageService: StorageService,
    private propertyEditService: PropertyUploadFormService,
    private confirmService: ConfirmDialogService
  ) { }

  async ngOnInit() {
    this.loadProperties();
    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);
  }


  loadProperties(): void {
    this.propertyManagement.getAllPropertiesForAgent().subscribe((res) => {
      this.propertyListOriginal = res.data;
      console.log(this.propertyListOriginal);
      this.propertyList = [...this.propertyListOriginal]; 
      // this.propertyList = [...res.data];
    })
  }

  filterProperties() {
    const search = this.propertySearchText.toLowerCase();

    this.propertyList = this.propertyListOriginal.filter(property =>
      property.agentId?.toLowerCase().includes(search) ||
      property.ownername?.toLowerCase().includes(search)
    );
  }

  addNew() {
    this.router.navigate(['/admin/add-property-for-agent']);
  }

  editProperty(property: any): void {
    this.router.navigate(['/admin/edit-property-for-agent']);
    this.propertyEditService.setPropertyData(property);
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

