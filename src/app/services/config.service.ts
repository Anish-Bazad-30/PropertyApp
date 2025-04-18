import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private cddConfigData;

  constructor(private http: HttpClient) {

    this.cddConfigData = {
     
      onBoardingScreen :{
       firstScreen:{
        title:"Welcome to Rajpal Properties",
        infomsg:"Find Your Dream Home",
        imageUrl: "../assets/images/first-screen.png",
        footer:"<<< Swipe Left",
       },
       secondScreen:{
        title:"Connect Directly with Agents",
        imageUrl: "../assets/images/secound-screen.png",
        footer:"<<< Swipe Left",
       },
       thirdScreen:{
        title:"Access Home Services and Refer Friends for Commissions",
        imageUrl:"../assets/images/third-screen.png",
       },
      },
      
      
    };
  }

  getConfigData() {
    return this.cddConfigData;
  }

}
