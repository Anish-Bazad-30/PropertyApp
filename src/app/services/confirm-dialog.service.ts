import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  confirm(title: string, message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '350px',
      data: { title, message },
    });

    return dialogRef.afterClosed();
  }

}
