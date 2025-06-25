import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  addAds(data: any): Observable<any> {
      const url = `${this.apiUrl}/api/partner-ads`;
      return this.http.post<any>(url, data);
    }

    deleteAds(id:any):Observable<any>{
      const url = `${this.apiUrl}/api/partner-ads/${id}`;
      return this.http.delete<any>(url, id);
    }

    updateAds(id:any,data: any): Observable<any> {
      const url = `${this.apiUrl}/api/partner-ads/${id}`;
      return this.http.put<any>(url, data);
    }

     getAds(): Observable<any> {
      const url = `${this.apiUrl}/api/partner-ads`;
      return this.http.get<any>(url);
    }

    private adsSubject = new BehaviorSubject<any>(null);
      adsData$ = this.adsSubject.asObservable();
    
      setAdsData(data: any): void {
        this.adsSubject.next(data);
      }
    
      // Get current property data snapshot
      getAdsData(): any {
        return this.adsSubject.getValue();
      }
}
