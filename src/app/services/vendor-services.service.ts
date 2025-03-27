import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendorServicesService {
  apiUrl: string = environment.API_URL; 
  

  constructor(private http: HttpClient) { }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/services`);
  }

  getServicesByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/services?category=${category}`);
  }
}

