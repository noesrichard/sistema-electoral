import { Component } from '@angular/core';
import { Column } from 'src/app/components/table/table.component';
import { TARJETONCOLUMNS, TARJETONES } from 'src/entities/tarjeton';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CreateDialogComponent } from 'src/app/components/create-dialog/create-dialog.component';
import { TarjetonFormComponent } from 'src/app/components/forms/tarjeton-form/tarjeton-form.component';

@Component({
  selector: 'app-tarjetones',
  templateUrl: './tarjetones.component.html',
  styleUrls: ['./tarjetones.component.css']
})
export class TarjetonesComponent {
  title = 'sistema-electoral';
  rows: any[] = TARJETONES; 
  columns: Column[] = TARJETONCOLUMNS; 

  constructor(private dialog: MatDialog){ }

  handleCreate(): void{ 
    const dialogRef = this.dialog.open(CreateDialogComponent,{ 
      data: {
        component: TarjetonFormComponent
      }
    })
  }
}
