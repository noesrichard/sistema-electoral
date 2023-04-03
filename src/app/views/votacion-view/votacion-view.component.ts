import { Component, OnInit } from '@angular/core';
import { TarjetonService } from 'src/app/services/tarjeton.service';
import { Tarjeton } from 'src/app/entities/tarjeton';
import { Candidato } from 'src/app/entities/candidato';
import { VotoService } from 'src/app/services/voto.service';
import { MatDialog } from '@angular/material/dialog';
import { VotacionCompletedDialogComponent } from 'src/app/components/dialogs/votacion-completed-dialog/votacion-completed-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votacion-view',
  templateUrl: './votacion-view.component.html',
  styleUrls: ['./votacion-view.component.css'],
})
export class VotacionViewComponent implements OnInit {
  tarjetones: Tarjeton[] = [];
  minimalCards: any[] = [];
  showVoteButton: boolean[] = [];

  votacion: Candidato[] = [];

  constructor(
    private tarjetonesService: TarjetonService,
    private votoService: VotoService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tarjetonesService.getAll().subscribe({
      next: (response: Tarjeton[]) => {
        this.tarjetones = response;
        this.tarjetones.forEach(() => {
          this.minimalCards.push(false);
          this.showVoteButton.push(true);
        });
      },
    });
  }

  handleVoto(candidato: Candidato, index: number) {
    this.minimalCards[index] = true;
    this.showVoteButton[index] = false;
    this.votacion.push(candidato);
  }

  handleSave() {
    // TODO
    let counter = 0;
    const estudianteId = 1;
    console.log(this.votacion);
    this.votacion.forEach((candidato) => {
      this.votoService
        .create({
          id: null,
          estudianteId: estudianteId,
          candidatoId: candidato.id,
        })
        .subscribe({
          next: () => {
            counter++;
            console.log(counter)
            if (counter == this.votacion.length) {
              const dialogRef = this.dialog.open(
                VotacionCompletedDialogComponent
              );
              dialogRef.afterClosed().subscribe((result) => {
                this.router.navigate(["inicio"])
              });
            }
          },
        });
    });
  }
}
