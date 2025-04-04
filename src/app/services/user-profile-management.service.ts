import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class UserProfileManagementService {
  apiUrl: string = environment.API_URL; 



  constructor(private http: HttpClient) { }
  
  fetchUserData(userId: string): Observable<any> {
    const profileManagementUrl = `${this.apiUrl}/api/admin/users/${userId}`;
    console.log(`Fetching user data from: ${profileManagementUrl}`);
    return this.http.get<any>(profileManagementUrl);
  }

  updateProfile(userId: string, data: any): Observable<any> {
    const profileManagementUrl = `${this.apiUrl}/api/users/${userId}/profile`;
    console.log(data, profileManagementUrl);
    return this.http.put<any>(profileManagementUrl, data);
}
} 