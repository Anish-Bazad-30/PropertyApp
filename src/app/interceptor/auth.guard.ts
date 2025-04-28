import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const token = localStorage.getItem('jwtToken');
    // const userRole = localStorage.getItem('role');
    const token = sessionStorage.getItem('jwtToken');
const userRole = sessionStorage.getItem('role');
    // const expectedPath = state.url.split('/')[1].toLowerCase(); 

    if (token && userRole) {
      console.log(userRole);
      
      return true;
    }
    else {
      this.router.navigate(['/auth']); 
      return false;
    }
  }
  
}
