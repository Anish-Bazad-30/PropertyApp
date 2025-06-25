import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PropertyService } from 'src/app/services/property.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss'],
})
export class MapDetailsComponent implements OnInit {
  propertyDetail: any[] = [];
  userId: any;
  property: any;
  safeLocationUrl: SafeResourceUrl | null = null;
  constructor(
    private propertyService: PropertyService,
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) { }

  async ngOnInit() {

    const userId = await this.storageService.getPreference('userName');
    this.userId = userId || '';
    console.log('User ID:', this.userId);

    this.getProperties();
  }

  callNow(mobileNumber: string): void {
    window.location.href = `tel:${mobileNumber}`;
  }

  onPropertySelect(event: any) {
    const selectedId = event.target.value;
    const selected= this.propertyDetail.find(
    p => p.ownername === selectedId);
    if (selected) {
    this.property = selected;
    this.safeLocationUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.property.locationUrl);
  }
  }
  getProperties() {
    this.propertyService.getPropertiesForAgent(this.userId).subscribe((res) => {
      this.propertyDetail = res.data;
      console.log(this.propertyDetail);

    })
  }

}