import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent  implements OnInit {

 properties: any[] = [];
  userId!: any;

  constructor(
    private router: Router,
    private propertyService: PropertyService,
    private propertyEditService: PropertyUploadFormService,
    private storageService: StorageService,
    private confirmService: ConfirmDialogService
  ) { }

  async ngOnInit() {

    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);

    setTimeout(() => {
      this.fetchProperty();
    }, 500);
  }


  fetchProperty() {

    this.propertyService.getProperties(this.userId).subscribe((res) => {
      this.properties = res.data;
      console.log(this.properties);

    })
  }
  addNew() {
    this.router.navigate(['/user/post-property'])
  }
  // finalizeSale(property: any) {
  //   this.finaliseSaleService.setPropertyData(property);
  //   this.router.navigate(['/user/buyer-details']);
  // }

  editProperty(property: any) {
    console.log(property);

    this.propertyEditService.setPropertyData(property);
    this.router.navigate(['/user/edit-property']);

  }

  deleteProperty(propertyId: any) {


    this.confirmService
      .confirm('Confirm Deletion', 'Are you sure you want to delete this Property?')
      .subscribe((result) => {
        if (result) {


          // console.log('Form Data:', propertyId);
          this.propertyService.deleteProperty(propertyId).subscribe((res) => {
            console.log(res);
            this.fetchProperty();
          })

        } else {
          // Deletion cancelled
          console.log('Deletion cancelled');
        }
      });
  }

}
