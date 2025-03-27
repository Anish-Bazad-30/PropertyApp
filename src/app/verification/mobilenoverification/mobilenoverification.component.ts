import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-mobilenoverification',
  templateUrl: './mobilenoverification.component.html',
  styleUrls: ['./mobilenoverification.component.scss'],
})
export class MobilenoverificationComponent  implements OnInit {
  mobileNumberScreen :any;
  constructor(private router: Router, private cddConfigData:ConfigService) { }
  
  ngOnInit() {
    this.mobileNumberScreen = this.cddConfigData.getConfigData().whatsappverification.mobileNumberScreen;
  }
  navigateToTarget() {
    this.router.navigate(['/otp']);
  }
}
