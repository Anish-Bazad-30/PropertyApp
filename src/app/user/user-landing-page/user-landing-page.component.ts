import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AdsService } from 'src/app/services/ads.service';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { SearchPropertiesService } from 'src/app/services/search-properties.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss'],
})
export class UserLandingPageComponent implements OnInit {

  adminMobileNumber: any = environment.mobileNumber;
  properties :any[]=[]; 
  filteredProperties :any[]=[]; 

  selectedCity = '';
  selectedArea = '';
  selectedSector = '';

  cities: any[] = [];
  areas: any[] = [];
  sectors: any[] = [];

   adsList: any[] = [];
  errorMessage: string = '';
  constructor(
    private searchProperties: SearchPropertiesService,
    private router: Router,
    private propertyService: PropertyUploadFormService,
    private adsService: AdsService
  ) {

  }
  ngOnInit(): void {
    this.getAllProperty();
    this.loadAds();
  }



  getAllProperty() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.properties = res.data;
      console.log(this.properties);
      this.filteredProperties = res.data;
    
      this.cities = [...new Set(res.data.map((p:any) => p.city))];
    });
  }
  onCityChange(): void {
    this.selectedArea = '';
    this.selectedSector = '';
    this.areas = [...new Set(this.properties
      .filter((p: any) => p.city === this.selectedCity)
      .map((p: any) => p.area))];

    this.filteredProperties = this.properties.filter((p: any) => p.city === this.selectedCity);
  }
  onAreaChange(): void {
    this.selectedSector = '';
    this.sectors = [...new Set(this.properties
      .filter((p: any) => p.city === this.selectedCity && p.area === this.selectedArea)
      .map((p: any) => p.sector))];

    this.filteredProperties = this.properties.filter((p: any) =>
      p.city === this.selectedCity && p.area === this.selectedArea
    );
  }

  onSectorChange(): void {
    this.filteredProperties = this.properties.filter((p: any) =>
      p.city === this.selectedCity &&
      p.area === this.selectedArea &&
      p.sector === this.selectedSector
    );
  }
  filterByCategory(category: string) {
    this.filteredProperties = this.properties.filter(
      p => p.option === category
    );
  }

  resetCategory() {
    this.filteredProperties = [...this.properties];
    this.selectedCity = '';
    this.selectedArea = '';
    this.selectedSector = '';
  }

  viewProperty(propertyId: string) {
    this.propertyService.setPropertyData(propertyId);
    this.router.navigate(['user/property-detail-view']);
  }

  callNow(phoneNumber: string) {
    
    window.open(`tel:${phoneNumber}`, '_system');
  }

  isImage(base64: string): boolean {
    return base64.startsWith('data:image') || base64.includes('/png') || base64.includes('/jpeg');
  }
  
  isVideo(base64: string): boolean {
    return base64.startsWith('data:video') || base64.includes('/mp4') || base64.includes('/webm');
  }

  getBase64(media: string): string {
    if (media.startsWith('data:')) {
      return media; // Already proper
    }
  
    // You can improve this by detecting from content or using metadata from backend
    if (media[0] === '/' || media.includes('png') || media.includes('iVBOR')) {
      return `data:image/png;base64,${media}`;
    } else {
      return `data:video/mp4;base64,${media}`;
    }
  }
 postProperty() {
    this.router.navigate(['/user/post-property']);
  }


 loadAds(): void {
    this.adsService.getAds().subscribe({
      next: (res) => {
        // if (res.length > 0) {
          this.adsList = res.data;
          console.log(this.adsList);
          
        // } else {
        //   this.errorMessage = 'No ads available at the moment.';
        // }
      },
      error: (err) => {
        console.error('Error fetching ads:', err);
        this.errorMessage = 'Failed to load ads. Please try again later.';
      }
    });
  }



}
