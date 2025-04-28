import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor( private router: Router) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('jwtToken'); 
    const token = sessionStorage.getItem('jwtToken');
   console.log('name');
    // Define the public API endpoints
    const publicApis = ['/login','/register'  ]; // Update with your actual API paths
 
    // Check if the request URL matches any of the public APIs
    if (publicApis.some(api => req.url.includes(api))) {
      return next.handle(req); // Skip adding the Authorization header
    }
 
    if (token) {
      // Clone the request and add the Authorization header
      console.log(token);
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    console.log(req);
   
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Token expired or invalid, redirect to login page
          // localStorage.removeItem('jwtToken'); 
          sessionStorage.removeItem('jwtToken');
          this.router.navigate(['/logIn']);  // Navigate to login page
        }
        return throwError(error); // Continue to propagate other errors
      })
    );
  }
}
