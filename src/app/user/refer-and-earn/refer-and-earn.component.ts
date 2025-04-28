import { Component, OnInit } from '@angular/core';
import { ReferAndEarnService } from 'src/app/services/refer-and-earn.service';

@Component({
  selector: 'app-refer-earn',
  templateUrl: './refer-and-earn.component.html',
  styleUrls: ['./refer-and-earn.component.scss']
})
export class ReferEarnComponent implements OnInit {
  referralLink: string = '';
  totalEarnings: string = '0';
  totalReferrals: string = '0';
  userName: string = '';

  constructor(private referAndEarnService: ReferAndEarnService,) { }

  ngOnInit() {

  //   const storedUserName = localStorage.getItem('userName');
  // this.userId = storedUserName !== null ? storedUserName : '';
  const storedUserName = sessionStorage.getItem('userName');
this.userName = storedUserName !== null ? storedUserName : '';
  
  console.log('User ID:', this.userName); // Here we check if userId is correct

  if (this.userName) {
    this.fetchReferralLink(); 
  } else {
    console.error('User ID is missing');
  }
    // Fetch total commission earned
    // this.referAndEarnService.getTotalCommission(this.userId).subscribe(res => {
    //   this.totalCommission = res;
    // }, error => {
    //   console.error('Error fetching commission:', error);
    //   this.totalCommission = 'Error fetching commission';
    // });
  }

  async fetchReferralLink(){
    console.log('Calling getReferrals API with userId:', this.userName);
  this.referAndEarnService.getReferrals(this.userName).subscribe(
    (res:any) => {
      console.log('API Response:', res);
      this.referralLink = res.data[0].referralLink;
      console.log("refereafasdsd",this.referralLink);
      
    },
    (error) => {
      console.error('Error generating referral link:', error);
      this.referralLink = 'Error fetching link';
    }
  );
  }

  copyLink() {
    navigator.clipboard.writeText(this.referralLink).then(() => {
      alert('Referral link copied to clipboard!');
    });
  }

  shareReferralLink() {
    if (navigator.share) {
      navigator.share({
        title: 'Refer & Earn',
        text: `Get 20% off using my referral link! ${this.referralLink}`,
        url: this.referralLink
      }).catch(error => console.log('Error sharing:', error));
    } else {
      this.copyLink();
    }
  }
}

