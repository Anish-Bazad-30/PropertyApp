import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  private spinnerVisibilitySubject = new BehaviorSubject<boolean>(false);
  spinnerVisibility$ = this.spinnerVisibilitySubject.asObservable();

  show() {
    this.spinnerVisibilitySubject.next(true);
  }

  hide() {
    this.spinnerVisibilitySubject.next(false);
  }
}
