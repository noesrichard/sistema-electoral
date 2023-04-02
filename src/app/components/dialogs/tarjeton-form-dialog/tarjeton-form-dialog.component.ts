import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjeton-form-dialog',
  templateUrl: './tarjeton-form-dialog.component.html',
  styleUrls: ['./tarjeton-form-dialog.component.css'],
})
export class TarjetonFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TarjetonFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
  }

  handleCancel() {
    this.dialogRef.close();
  }

  handleSave() {
    console.log(this.data.tarjeton)
    this.dialogRef.close(this.data.tarjeton);
  }
}
