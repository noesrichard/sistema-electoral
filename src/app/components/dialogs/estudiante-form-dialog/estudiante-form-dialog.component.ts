import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiante-form-dialog',
  templateUrl: './estudiante-form-dialog.component.html',
  styleUrls: ['./estudiante-form-dialog.component.css']
})
export class EstudianteFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EstudianteFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){ 
  }

  handleCancel() {
    this.dialogRef.close(); 
  }

  handleSave() {
    this.dialogRef.close(this.data.estudiante);
  }
}
