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

  postServices(data:any):Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/api/services`,data);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/services`);
  }

  getServicesByAgentId(agentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/services/user/${agentId}`);
  }

  deleteServiceById(serviceId:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/api/services/${serviceId}`);
  }

  updateServiceById(serviceId:any, data:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/api/services/${serviceId}`, data);
  }
}

