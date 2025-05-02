import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  userName!: string;
  userId: any;
  token!: string;
  userRole!: string;
  constructor(
    private storageService: StorageService,
    private router: Router,
  ) {}
  async ngOnInit() {
    const userId = await this.storageService.getPreference('userId');
    this.userId = userId || '';
    const userRole = await this.storageService.getPreference('role');
    this.userRole = userRole || '';
    const token = await this.storageService.getPreference('jwtToken');
    this.token = token || '';

    if (this.userName && this.userRole && this.token) {
      this.redirectBasedOnRole(this.userRole);
    }
  }

  redirectBasedOnRole(role:any){

    switch (role) {
      case 'AGENT':
        this.router.navigate(['/agent']);
        break;
      case 'USER':
        this.router.navigate(['/user']);
        break;
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }

}
