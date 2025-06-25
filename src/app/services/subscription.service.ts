import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  apiUrl: string = environment.API_URL; 
 
  constructor(private http: HttpClient) { }
  
    postSubscription(userId:any):Observable<any>{
      return this.http.post<any[]>(`${this.apiUrl}/api/subscription/create-checkout-session?userId=${userId}`,null);
    }


}
