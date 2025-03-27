import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferAndEarnService {
  private apiUrl: string = environment.API_URL; 

  constructor(private http: HttpClient) { }

  createReferral(referrerId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/referrals/create?referrerId=${referrerId}`,null);
  }

  getReferrals(referrerId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/referrals/${referrerId}`);
  }

  // getTotalCommission(referrerId: string): Observable<string> {
  //   return this.http.get<string>(`${this.apiUrl}/api/referrals/commissions/${referrerId}`);
  // }
}
