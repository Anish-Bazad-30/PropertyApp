import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';
import { SaleFinaliseService } from 'src/app/services/sale-finalise.service';
import { StorageService } from 'src/app/services/storage.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {

  properties: any[] = [];
  userId!: any;

  constructor(
    private router: Router,
    private propertyService: PropertyService,
    private propertyEditService: PropertyUploadFormService,
    private finaliseSaleService: SaleFinaliseService,
    private storageService: StorageService,
    private confirmService: ConfirmDialogService,
    private subscribleService: SubscriptionService
  ) { }

  async ngOnInit() {

    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    console.log('User ID:', this.userId);

  }


  subscribe() {
    this.subscribleService.postSubscription(this.userId).subscribe(
      async (res: any) => {
        const url = res.data.checkoutUrl;
        if (url) {
          await Browser.open({ url });
        }
      })
  }


}
