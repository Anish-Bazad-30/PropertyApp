import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, from, Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor( private router: Router,
    private storageService: StorageService
  ) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const publicApis = ['/login', '/register'];

    // Skip token if public API
    if (publicApis.some(api => req.url.includes(api))) {
      return next.handle(req);
    }
  
    // Get token from Preferences (returns a Promise)
    return from(this.storageService.getPreference('jwtToken')).pipe(
      switchMap((token: string | null) => {
        if (token) {
          console.log(token);
          
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
    
        return next.handle(req);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.storageService.removePreference('jwtToken');
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
