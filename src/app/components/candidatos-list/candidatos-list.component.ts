import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';
import { Candidato } from 'src/entities/candidato';
import { CandidatoFormDialogComponent } from '../dialogs/candidato-form-dialog/candidato-form-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css'],
})
export class CandidatosListComponent implements OnInit, OnChanges {
  candidatos: Candidato[] = [];
  @Input() tarjetonId: number = 1;
  @Input() minimalCards: boolean = false; 
  @Input() showCrudButtons: boolean = true; 
  @Input() showVoteButton: boolean = true; 

  constructor(
    private candidatoService: CandidatoService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios');
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.candidatoService.getCandidatosByTarjetonId(this.tarjetonId).subscribe({
      next: (response) => {
        this.candidatos = response;
      },
    });
  }

  handleDelete(candidato: Candidato) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.candidatoService.delete(candidato).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }

  handleEdit(candidato: Candidato) {
    const dialogRef = this.dialog.open(CandidatoFormDialogComponent, {
      data: {
        candidato: { ...candidato },
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.candidatoService.update(result).subscribe({
          next: () => {
            this.getData();
          },
        });
      }
    });
  }
}
