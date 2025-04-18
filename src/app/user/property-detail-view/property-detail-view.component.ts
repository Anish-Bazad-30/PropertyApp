import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail-view',
  templateUrl: './property-detail-view.component.html',
  styleUrls: ['./property-detail-view.component.scss'],
})

export class PropertyDetailViewComponent implements OnInit {
 

  propertyDetail : any;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.propertyDetail = JSON.parse(params['data']);
      console.log(this.propertyDetail);
    });
  }

  callNow(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_system');
  }

  isImage(base64: string): boolean {
    return base64.startsWith('data:image') || base64.includes('/png') || base64.includes('/jpeg');
  }
  
  isVideo(base64: string): boolean {
    return base64.startsWith('data:video') || base64.includes('/mp4') || base64.includes('/webm');
  }

  getBase64(media: string): string {
    if (media.startsWith('data:')) {
      return media; // Already proper
    }
  
    // You can improve this by detecting from content or using metadata from backend
    if (media[0] === '/' || media.includes('png') || media.includes('iVBOR')) {
      return `data:image/png;base64,${media}`;
    } else {
      return `data:video/mp4;base64,${media}`;
    }
  }
}
