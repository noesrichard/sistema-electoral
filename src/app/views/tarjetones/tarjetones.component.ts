import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/components/table/table.component';
import { Tarjeton, TARJETONCOLUMNS, TARJETONES, VOIDTARJETON } from 'src/entities/tarjeton';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { TarjetoFormDialogComponent } from 'src/app/components/dialogs/tarjeto-form-dialog/tarjeto-form-dialog.component';
import { TarjetonService } from 'src/app/services/tarjeton.service';
import { DeleteDialogComponent } from 'src/app/components/dialogs/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/entities/curso';

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
    private cursosService: CursoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  setCursos(tarjeton: Tarjeton, cursos: Curso[]): string{ 
    let cursosString = ''; 
    let filterd = cursos.filter( curso => {
      for(let i = 0; i < tarjeton.cursos.length; i++){ 
        if(curso.id == tarjeton.cursos[i]){
          return true;
        }
      }
      return false;
    })
    filterd.forEach(curso => { 
      cursosString = cursosString + curso.nombre + ', '
    })
    return cursosString;
  }

  getData(): void {
    let cursos = [];
    this.cursosService.getAll().subscribe({ 
      next: (response: Curso[])=> { 
        cursos = response;
        this.tarjetonService.getAll().subscribe({ 
          next: (response: Tarjeton[]) => { 
            this.rows = response.map(tarjeton => { 
              return {
                id: tarjeton.id,
                title: tarjeton.title,
                cursos: tarjeton.cursos,
                cursosText: this.setCursos(tarjeton, cursos),
              }
            })
          }
        })
      }
    })
    // this.tarjetonService.getAll().subscribe({
    //   next: (response: Tarjeton[]) => {
    //     this.rows = response.map(tarjeton => { 
    //       let cursos = this.cursosService.getAll().subscribe({
    //         next: (response: Curso[]) => { 
    //
    //         }
    //       })
    //       return {id: tarjeton.id, }
    //     });
    //   },
    // });
  }

  handleCreate(): void {
    const dialogRef = this.dialog.open(TarjetoFormDialogComponent, {
      data: { tarjeton: VOIDTARJETON },
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
