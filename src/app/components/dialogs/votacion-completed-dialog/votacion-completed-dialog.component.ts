import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-votacion-completed-dialog',
  templateUrl: './votacion-completed-dialog.component.html',
  styleUrls: ['./votacion-completed-dialog.component.css']
})
export class VotacionCompletedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<VotacionCompletedDialogComponent>,
  ){}

  handleConfirm() {
    this.dialogRef.close(true)
  }

}
