import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchPropertiesService {
 


   apiUrl: string=environment.API_URL;
  
    constructor(private http: HttpClient) {}
    searchProperties(data:any):Observable<any>{
      const searchPropertiesUrl = this.apiUrl + '/api/properties/search?city=' + data.city + '&area=' + data.area + '&sector=' + data.sector;
      console.log(data , searchPropertiesUrl);
      return  this.http.get<any>(searchPropertiesUrl);
   
    }
}
