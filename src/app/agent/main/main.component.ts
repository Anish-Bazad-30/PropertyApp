import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  constructor(
    private menu: MenuController,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {}
  openMenu() {
    this.menu.enable(true, 'mainMenu');
     this.menu.open('mainMenu');
   }
 
   closeMenu() {
     this.menu.close('mainMenu');
   }

   goBack(){
    this.location.back();
   }

   logout(){
    localStorage.clear();
    //clear seesion stroge here
    this.router.navigate(['/auth/login']);
   }

}
