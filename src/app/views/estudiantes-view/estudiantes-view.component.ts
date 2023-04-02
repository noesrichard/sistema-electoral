import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/dialogs/delete-dialog/delete-dialog.component';
import { EstudianteFormDialogComponent } from 'src/app/components/dialogs/estudiante-form-dialog/estudiante-form-dialog.component';
import { Column } from 'src/app/components/table/table.component';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Curso } from 'src/app/entities/curso';
import { Estudiante, ESTUDIANTES, ESTUDIANTESCOLUMNS, VOIDESTUDIANTE } from 'src/app/entities/estudiante';

@Component({
  selector: 'app-estudiantes-view-view',
  templateUrl: './estudiantes-view.component.html',
  styleUrls: ['./estudiantes-view.component.css']
})
export class EstudiantesViewComponent {

  title = 'sistema-electoral';
  rows: any[] = ESTUDIANTES;
  columns: Column[] = ESTUDIANTESCOLUMNS;

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteService,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.estudianteService.getAll().subscribe({
      next: (response: Estudiante[]) => {
        this.rows = response;
        this.rows.forEach((estudiante: Estudiante) => {
          this.cursoService.getById(estudiante.cursoId).subscribe({
            next: (response: Curso[]) => {
              estudiante.curso = response[0].nombre;
            }
          })
        })
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
