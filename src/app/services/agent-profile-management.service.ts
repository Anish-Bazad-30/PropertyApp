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
 
  fetchAgentData(userId: string): Observable<any> {
    const fetchProfileUrl = `${this.apiUrl}/api/admin/users/${userId}`;
    // console.log(`Fetching user data from: ${fetchProfileUrl}`);
    return this.http.get<any>(fetchProfileUrl);
  }

  updateProfile(data: any): Observable<any> {
    const updateProfileUrl = `${this.apiUrl}/api/profile/update`;
    // console.log(data, updateProfileUrl);
    return this.http.put<any>(updateProfileUrl, data);
}

  fetchAllAgentsData(): Observable<any>{
  const url = `${this.apiUrl}/api/admin/agents`;
  return this.http.get<any>(url);
}
}
