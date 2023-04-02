import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/components/table/table.component';
import { Tarjeton, TARJETONCOLUMNS, TARJETONES } from 'src/entities/tarjeton';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { TarjetoFormDialogComponent } from 'src/app/components/dialogs/tarjeto-form-dialog/tarjeto-form-dialog.component';
import { TarjetonService } from 'src/app/services/tarjeton.service';
import { DeleteDialogComponent } from 'src/app/components/dialogs/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetones',
  templateUrl: './tarjetones.component.html',
  styleUrls: ['./tarjetones.component.css'],
})
export class TarjetonesComponent implements OnInit {
  title = 'sistema-electoral';
  rows: any[] = TARJETONES;
  columns: Column[] = TARJETONCOLUMNS;

  constructor(
    private dialog: MatDialog,
    private tarjetonService: TarjetonService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.tarjetonService.getAll().subscribe({
      next: (response: any) => {
        this.rows = response;
      },
    });
  }

  handleCreate(): void {
    const dialogRef = this.dialog.open(TarjetoFormDialogComponent, {
      data: { tarjeton: { id: null, title: null } },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tarjetonService.create(result).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleEdit(tarjeton: Tarjeton): void {
    const dialogRef = this.dialog.open(TarjetoFormDialogComponent, {
      data: { tarjeton: { ...tarjeton } },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tarjetonService.update(result).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleDelete(tarjeton: Tarjeton): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tarjetonService.delete(tarjeton).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleRowClick(tarjeton: Tarjeton) {
    this.router.navigate(['candidatos', tarjeton.id])
  }
}
