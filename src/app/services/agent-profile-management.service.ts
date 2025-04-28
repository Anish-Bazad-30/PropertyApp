import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentProfileManagementService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  fetchAgentData(userId: string): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/${userId}`;
    const headers = new HttpHeaders({
      'requesterId': userId,  // replace with actual logic
      'requesterRole': 'AGENT' // or 'agent', depending on who is making the request
      
    });
    
    return this.http.get<any>(url, { headers });
  }

  updateProfile(data: any): Observable<any> {
    const updateProfileUrl = `${this.apiUrl}/api/profile/update`;
    // console.log(data, updateProfileUrl);
    return this.http.put<any>(updateProfileUrl, data);
  }

  fetchAllAgentsData(): Observable<any> {
    const url = `${this.apiUrl}/api/admin/admin/agents`;
    return this.http.get<any>(url);
  }

  deleteAgentProfile(agent: any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/${agent.id}`;
    const headers = new HttpHeaders({
      'requesterId': agent.id,  // replace with actual logic
      'requesterRole': 'ADMIN' // or 'agent', depending on who is making the request
    });

    return this.http.delete<any>(url, { headers });
  }


  private agentSubject = new BehaviorSubject<any>(null);
  agentData$ = this.agentSubject.asObservable();

  setAgentData(data: any): void {
    this.agentSubject.next(data);
  }

  // Get current property data snapshot
  getAgentData(): any {
    return this.agentSubject.getValue();
  }


  approveAgent(agentId:any): Observable<any>{
    const url = `${this.apiUrl}/api/auth/admin/approve/${agentId}`;
    return this.http.put<any>(url,{});
  }

  rejectAgent(agentId:any): Observable<any>{
    const url = `${this.apiUrl}/api/auth/admin/reject/${agentId}`;
    return this.http.put<any>(url,{});
  }
}
