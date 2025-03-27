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
  updateProfile(userId: string, data: any): Observable<any> {
    const profileManagementUrl = `${this.apiUrl}/api/users/${userId}/profile`;
    console.log(data, profileManagementUrl);
    return this.http.put<any>(profileManagementUrl, data);
}
} 