import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjeto-form-dialog',
  templateUrl: './tarjeto-form-dialog.component.html',
  styleUrls: ['./tarjeto-form-dialog.component.css'],
})
export class TarjetoFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TarjetoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){ 
  }

  handleCancel() {
    this.dialogRef.close(); 
  }

  handleSave() {
    this.dialogRef.close(this.data.tarjeton);
  }
}
