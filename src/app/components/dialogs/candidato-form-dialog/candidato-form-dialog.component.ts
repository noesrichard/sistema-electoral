import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidato-form-dialog',
  templateUrl: './candidato-form-dialog.component.html',
  styleUrls: ['./candidato-form-dialog.component.css']
})
export class CandidatoFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CandidatoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){ 
  }

  handleCancel() {
    this.dialogRef.close(); 
  }

  handleSave() {
    this.dialogRef.close(this.data.candidato);
  }
}
