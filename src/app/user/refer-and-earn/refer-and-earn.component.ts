import { Component, OnInit } from '@angular/core';
import { ReferAndEarnService } from 'src/app/services/refer-and-earn.service';
import { Share } from '@capacitor/share';
import { StorageService } from 'src/app/services/storage.service';
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

  constructor(
    private referAndEarnService: ReferAndEarnService,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {

    //   const storedUserName = localStorage.getItem('userName');
    // this.userId = storedUserName !== null ? storedUserName : '';
    const userId = await this.storageService.getPreference('userName');
    this.userName = userId || '';

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

  async fetchReferralLink() {
    this.referAndEarnService.getReferrals(this.userName).subscribe(
      (res: any) => {
        console.log('API Response:', res);
        this.referralLink = res.data[0].referralLink;
        console.log("refereafasdsd", this.referralLink);

      },
      (error) => {
        console.error('Error generating referral link:', error);
        this.referralLink = 'Error fetching link';
      }
    );
  }

  copyLink() {
    navigator.clipboard.writeText(this.referralLink).then(() => {
      // alert('Referral link copied to clipboard!');
    });
  }

  async shareReferralLink() {
    try {
      await Share.share({
        title: 'Refer & Earn',
        text: 'Get 20% off using my referral link!',
        url: this.referralLink,
        dialogTitle: 'Share with friends'
      });
    } catch (error) {
      console.error('Error sharing:', error);
      this.copyLink(); // Fallback if sharing fails
    }
  }
}

