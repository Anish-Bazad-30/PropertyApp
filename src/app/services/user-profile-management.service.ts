import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileManagementService {
  apiUrl: string = environment.API_URL;



  constructor(private http: HttpClient) { }

  fetchUserData(userId: string): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/${userId}`;
    const headers = new HttpHeaders({
      'requesterId': userId,  // replace with actual logic
      'requesterRole': 'USER' // or 'agent', depending on who is making the request

    });

    return this.http.get<any>(url, { headers });
  }

  updateProfile(data: any): Observable<any> {
    const updateProfileUrl = `${this.apiUrl}/api/profile/update`;
    // console.log(data, updateProfileUrl);
    return this.http.put<any>(updateProfileUrl, data);
  }
  fetchAllUsersData(): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users`;
    return this.http.get<any>(url);
  }

  deleteUserProfile(user: any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/${user.id}`;
    const headers = new HttpHeaders({
      'requesterId': user.id,  // replace with actual logic
      'requesterRole': 'ADMIN' // or 'agent', depending on who is making the request
    });

    return this.http.delete<any>(url, { headers });
  }


  private userSubject = new BehaviorSubject<any>(null);
  userData$ = this.userSubject.asObservable();

  setUserData(data: any): void {
    this.userSubject.next(data);
  }

  // Get current property data snapshot
  getUserData(): any {
    return this.userSubject.getValue();
  }


  joinAsAgent(): Observable<any> {
    const url = `${this.apiUrl}/api/profile/join-agent`;
    return this.http.post<any>(url,'');
  }
} 