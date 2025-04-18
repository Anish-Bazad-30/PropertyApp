import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../services/config.service';
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import { SwiperOptions } from 'swiper/types';
import { Router } from '@angular/router';
register();
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent  implements OnInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;
  swiper?: Swiper;
  
  firstScreen :any;
  secoundScreen : any;
  thirdScreen : any;

  constructor(private cddConfigData:ConfigService,private router: Router) {   
  }

  ngOnInit() {
    this.firstScreen = this.cddConfigData.getConfigData().onBoardingScreen.firstScreen;
    this.secoundScreen = this.cddConfigData.getConfigData().onBoardingScreen.secondScreen;
   this.thirdScreen = this.cddConfigData.getConfigData().onBoardingScreen.thirdScreen;
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  // swiperSlideChanged(event: Event) {
  //   console.log('changed: ', event);
  // }
  goNext() {
    this.swiper?.slideNext();
  }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  // onSwiper([swiper]:any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

  navigateToTarget() {
    this.router.navigate(['/auth']);
  }
}
