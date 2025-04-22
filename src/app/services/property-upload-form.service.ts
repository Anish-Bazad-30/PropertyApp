import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyUploadFormService {
    private apiUrl: string = environment.API_URL; 

  constructor(private http: HttpClient) { }

    uploadProperty(propertyData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/api/properties/upload`, propertyData);
    }

    getAllProperties():Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/api/admin/properties`);
    }

    private propertySubject = new BehaviorSubject<any>(null);
    propertyData$ = this.propertySubject.asObservable();

    setPropertyData(data: any): void {
      this.propertySubject.next(data);
    }
  
    // Get current property data snapshot
    getPropertyData(): any {
      return this.propertySubject.getValue();
    }
}
