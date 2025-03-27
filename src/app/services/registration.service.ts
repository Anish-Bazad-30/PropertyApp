import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiUrl: string=environment.API_URL;

  constructor(private http: HttpClient) {}
  register(data:any):Observable<any>{
    const registertationUrl= this.apiUrl + "/api/auth/register" ;
    console.log(data , registertationUrl);
    return  this.http.post<any>(registertationUrl,data);
 
  }

}
