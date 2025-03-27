import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentProfileManagementService {

  private apiUrl: string = environment.API_URL; 

  constructor(private http:HttpClient) { }

  createAgentProfile(profileData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, profileData);
  }

  updateAgentProfile(id:string, profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/update`, profileData);
  }
}
