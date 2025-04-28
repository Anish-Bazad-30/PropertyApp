import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleFinaliseService {
 apiUrl: string=environment.API_URL;

  constructor(private http: HttpClient) {}
  finaliseSale(data:any):Observable<any>{
    const url= this.apiUrl + "/api/property-sale" ;
    // console.log(data , url);
    return  this.http.post<any>(url,data);
 
  }


  private propertySubject = new BehaviorSubject<any>(null);

  setPropertyData(data: any) {
    this.propertySubject.next(data);
  }

  getPropertyData() {
    return this.propertySubject.asObservable();
  }

  clearPropertyData() {
    this.propertySubject.next(null);
  }
}
