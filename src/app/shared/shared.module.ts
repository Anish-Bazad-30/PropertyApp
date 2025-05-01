import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeletePopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [DeletePopupComponent]
})
export class SharedModule {}
