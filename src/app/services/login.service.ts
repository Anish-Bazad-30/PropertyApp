import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string=environment.API_URL;
 
   constructor(private http: HttpClient) {}
   login(data:any):Observable<any>{
     const loginUrl= this.apiUrl + "/api/auth/login" ;
     console.log(data , loginUrl);
     return  this.http.post<any>(loginUrl,data);
  
   }
}
