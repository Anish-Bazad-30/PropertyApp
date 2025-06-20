import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss'],
})
export class MapDetailsComponent  implements OnInit {
  propertyDetail: any[] = [];
  userId: any;

  constructor(
    private propertyService : PropertyService,
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    this.propertyDetail = [
      {
        name: 'Lotus Residency - 2BHK Deluxe Apartment',
        ownerMobile: '+91 9878987654'
      },
      {
        name: 'Lotus Residency - 2BHK Deluxe Apartment',
        ownerMobile: '+91 9878987654'
      }
    ];
     const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);

    this.getProperties();
  }

  callNow(mobileNumber: string): void {
    window.location.href = `tel:${mobileNumber}`;
  }

  getProperties(){
    this.propertyService.getPropertiesForAgent(this.userId).subscribe((res)=>{
      this.propertyDetail = res.data;
      console.log(this.propertyDetail);
      
    })
  }

}