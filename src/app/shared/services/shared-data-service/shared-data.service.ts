import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmDeleteComponent } from '../../components/confirm-delete/confirm-delete.component';
import { LoadingDialogComponent } from '../../components/loading-dialog/loading-dialog.component';

@Injectable()
export class SharedDataService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }
  public currentView = 'Home';
  openSnackBar = (message: string, duration = 2000) => {
    this.snackBar.open(message, '', {
      duration: duration,
    });
  }

  openLoadingSpinner = () => {
    this.dialog.open(LoadingDialogComponent, {
      height: '150px',
      width: '200px',
    });
  }

  closeLoadingSpinner = () => {
    this.dialog.closeAll();
  }

  openConfirmDeleteDialog = (): Observable<boolean> => {
    const dialogInstance = this.dialog.open(ConfirmDeleteComponent, {
      height: '150px',
      width: '200px',
    });
    return dialogInstance.afterClosed();
  }


}
