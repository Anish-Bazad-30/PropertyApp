import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyUploadFormService {
    private apiUrl: string = environment.API_URL; 

  constructor(private http: HttpClient) { }

    uploadProperty(propertyData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/upload`, propertyData);
    }
}
