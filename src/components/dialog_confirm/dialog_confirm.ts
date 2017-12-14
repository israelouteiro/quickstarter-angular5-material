import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog_confirm.html',
})
export class DialogConfirm {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirm>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
	  onNoClick(): void {
	    this.dialogRef.close();
	  }
}