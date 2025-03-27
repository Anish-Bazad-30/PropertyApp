import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.scss'],
})
export class OtpverificationComponent  implements OnInit {
  otpScreen :any;
  constructor(private router: Router, private cddConfigData:ConfigService) { }

  ngOnInit() {
    this.otpScreen = this.cddConfigData.getConfigData().whatsappverification.otpScreen;
  }
  navigateToTarget() {
    this.router.navigate(['/otp']);
  }
}
