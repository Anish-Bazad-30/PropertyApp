import {Component, OnInit} from '@angular/core'
import { SearchPropertiesService } from 'src/app/services/search-properties.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss'],
})
export class UserLandingPageComponent implements OnInit  {
  constructor(private searchProperties: SearchPropertiesService) {

  }
  ngOnInit(): void {
    this.search();
  }
  search() {
    const data = {
      city: "Delhi",
      area: "South",
      sector: "Sector1"
    }
    this.searchProperties.searchProperties(data).subscribe((res)=>{
      console.log(res);
    })
  }
 
  cities: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
  areaData: { [key: string]: string[] } = {
    Delhi: ['Dwarka', 'Saket', 'Rohini'],
    Mumbai: ['Andheri', 'Bandra', 'Juhu'],
    Bangalore: ['Whitefield', 'Koramangala', 'Indiranagar'],
    Chennai: ['T. Nagar', 'Velachery', 'Adyar'],
    Kolkata: ['Salt Lake', 'New Town', 'Behala'],
  };
  sectorData: { [key: string]: { [key: string]: string[] } } = {
    Delhi: {
      Dwarka: ['Sector 1', 'Sector 2', 'Sector 3'],
      Saket: ['Sector A', 'Sector B', 'Sector C'],
      Rohini: ['Sector X', 'Sector Y', 'Sector Z'],
    },
    Mumbai: {
      Andheri: ['Sector P', 'Sector Q', 'Sector R'],
      Bandra: ['Sector L', 'Sector M', 'Sector N'],
      Juhu: ['Sector G', 'Sector H', 'Sector I'],
    },
    Bangalore: {
      Whitefield: ['Sector W1', 'Sector W2', 'Sector W3'],
      Koramangala: ['Sector K1', 'Sector K2', 'Sector K3'],
      Indiranagar: ['Sector I1', 'Sector I2', 'Sector I3'],
    },
    Chennai: {
      T_Nagar: ['Sector T1', 'Sector T2', 'Sector T3'],
      Velachery: ['Sector V1', 'Sector V2', 'Sector V3'],
      Adyar: ['Sector A1', 'Sector A2', 'Sector A3'],
    },
    Kolkata: {
      Salt_Lake: ['Sector S1', 'Sector S2', 'Sector S3'],
      New_Town: ['Sector N1', 'Sector N2', 'Sector N3'],
      Behala: ['Sector B1', 'Sector B2', 'Sector B3'],
    },
  };

   // Selected values
   selectedCity = '';
   selectedArea = '';
   selectedSector = '';
   selectedCategory = '';
 
   // Derived lists
   areas: string[] = [];
   sectors: string[] = [];
 
   // Property data with categories
   properties = [
    {
      title: 'Lotus Residency - 2BHK Deluxe Apartment',
      description: `Flat No. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru, Karnataka - 560095`,
      category: 'Apartment'
    },
    {
      title: 'Lotus Residency - 2BHK Deluxe Apartment',
      description: `Flat No. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru, Karnataka - 560095`,
      category: 'Apartment'
    },
    {
      title: 'Lotus Residency - 2BHK Deluxe Apartment',
      description: `Flat No. 5A, Lotus Residency, MG Road, Koramangala, Bengaluru, Karnataka - 560095`,
      category: 'Apartment'
    },
   ];
 
   // Copy for filtering
   filteredProperties = [...this.properties];
 
   // Methods to update dropdowns
   onCityChange() {
     this.areas = this.selectedCity ? this.areaData[this.selectedCity] || [] : [];
     this.selectedArea = '';
     this.sectors = [];
     this.selectedSector = '';
    const data = {
      city: this.selectedCity,
      
    }
    this.searchProperties.searchProperties(data).subscribe((res)=>{
      console.log(res);
    })
   }
 
   onAreaChange() {
     this.sectors =
       this.selectedCity && this.selectedArea
         ? this.sectorData[this.selectedCity][this.selectedArea] || []
         : [];
     this.selectedSector = '';
    const data = {
      city: this.selectedCity,
      area: this.selectedArea,
      
    }
    this.searchProperties.searchProperties(data).subscribe((res)=>{
      console.log(res);
    })
   }

   onSectorChange(){
    const data = {
      city: this.selectedCity,
      area: this.selectedArea,
      sector : this.selectedSector
    }
    this.searchProperties.searchProperties(data).subscribe((res)=>{
      console.log(res);
    })
   }
 
   // Method to filter properties by category
   filterByCategory(category: string) {
     this.selectedCategory = category;
     this.filteredProperties = this.properties.filter(p => p.category === category);
   }
 
   viewProperty(propertyTitle: string) {
    alert(`You have selected: ${propertyTitle}`);
  }
   
   callNow(propertyTitle: string) {
     alert(`Calling..`);
   }
 }
 