import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

     apiUrl: string=environment.API_URL;
    
      constructor(private http: HttpClient) {}
      getProperties(userId:any):Observable<any>{
        const searchPropertiesUrl = this.apiUrl + '/api/properties/user/' + userId;
        return  this.http.get<any>(searchPropertiesUrl);
     
      }

      fetchAllProperties(): Observable<any>{
        const url = `${this.apiUrl}/api/admin/properties`;
        return this.http.get<any>(url);
      }
}
