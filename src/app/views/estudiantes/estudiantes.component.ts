import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/dialogs/delete-dialog/delete-dialog.component';
import { EstudianteFormDialogComponent } from 'src/app/components/dialogs/estudiante-form-dialog/estudiante-form-dialog.component';
import { Column } from 'src/app/components/table/table.component';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante, ESTUDIANTES, ESTUDIANTESCOLUMNS, VOIDESTUDIANTE } from 'src/entities/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  title = 'sistema-electoral';
  rows: any[] = ESTUDIANTES;
  columns: Column[] = ESTUDIANTESCOLUMNS;

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.estudianteService.getAll().subscribe({
      next: (response: any) => {
        this.rows = response;
      },
    });
  }

  handleCreate(): void {
    const dialogRef = this.dialog.open(EstudianteFormDialogComponent, {
      data: { estudiante: {...VOIDESTUDIANTE} },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.estudianteService.create(result).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleEdit(estudiante: Estudiante): void {
    const dialogRef = this.dialog.open(EstudianteFormDialogComponent, {
      data: { estudiante: { ...estudiante } },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.estudianteService.update(result).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleDelete(estudiante: Estudiante): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.estudianteService.delete(estudiante).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }
}
