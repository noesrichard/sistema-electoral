import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidatoService } from 'src/app/services/candidato.service';
import { VotoService } from 'src/app/services/voto.service';
import { Candidato } from 'src/app/entities/candidato';
import { Voto } from 'src/app/entities/voto';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.css'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Input() minimal: boolean = false;
  @Input() showCrudButtons: boolean = true;
  @Input() showVoteButton: boolean = true;
  @Input() showVotoCounter: boolean = true;

  votosCounter: number = 0;
  totalVotosCounter: number = 0;

  constructor(
    private candidatoService: CandidatoService,
    private votosService: VotoService
  ) {}

  isUserLoggedAdmin: boolean = true;

  ngOnInit(): void {
    // if(localStorage.key("usuario") == "ADMIN"){
    //   this.isUserLoggedAdmin = true;
    // }else{
    //   this.isUserLoggedAdmin = false;
    // }
    //
    this.votosService.getByCandidatoId(this.candidato.id).subscribe({
      next: (response: Voto[]) => {
        this.votosCounter = response.length;
        this.candidatoService.getCandidatosAndVotosByTarjeton(
          this.candidato.tarjetonId
        ).subscribe({
            next: (response) => {
              response.forEach(r => {
                this.totalVotosCounter += r.votos.length
              })
            }
          });
      },
    });
  }

  handleDelete(): void {
    this.onDelete.emit(this.candidato);
  }

  handleEdit(): void {
    this.onEdit.emit(this.candidato);
  }
}
