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

      deleteProperty(propertyId : any): Observable<any>{
        const url = `${this.apiUrl}/api/admin/properties/`+ propertyId;
        return this.http.delete<any>(url);
      }

      editProperty(property :any,propertyId:any): Observable<any>{
        const url = `${this.apiUrl}/api/admin/edit/`+ propertyId;
        return this.http.put<any>(url,property);
      }

      addPropertiesForAgent(property :any): Observable<any>{
        const url = `${this.apiUrl}/api/admin/uploadProperties`;
        return this.http.post<any>(url,property);
      }

       getPropertiesForAgent(id :any): Observable<any>{
        const url = `${this.apiUrl}/api/properties/by-agent/${id}`;
        return this.http.get<any>(url);
      }
}
