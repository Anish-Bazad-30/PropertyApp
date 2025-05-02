import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  
    constructor(
      private menu: MenuController,
      private location: Location,
      private router: Router,
      private storageService: StorageService,
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
      this.storageService.clearPreference().then(() => {
        this.router.navigate(['/login']); // Redirect to login page
      }).catch(error => {
        console.error('Error clearing preferences on logout:', error);
      });
      this.router.navigate(['/auth/login']);
     }
}
