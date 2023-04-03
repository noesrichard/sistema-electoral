import { Component, OnInit } from '@angular/core';
import { TarjetonService } from 'src/app/services/tarjeton.service';
import { Tarjeton } from 'src/app/entities/tarjeton';
import { Candidato } from 'src/app/entities/candidato';

@Component({
  selector: 'app-votacion-view',
  templateUrl: './votacion-view.component.html',
  styleUrls: ['./votacion-view.component.css']
})
export class VotacionViewComponent implements OnInit{
  tarjetones: Tarjeton[] = [];
  minimalCards: any[] = []; 
  showVoteButton: boolean[] = []; 

  constructor(private tarjetonesService: TarjetonService) {}

  ngOnInit(): void {
    this.tarjetonesService.getAll().subscribe({
      next: (response: Tarjeton[]) => {
        this.tarjetones = response;
        this.tarjetones.forEach(() => { 
          this.minimalCards.push(false)
          this.showVoteButton.push(true)
        })
      }
    })
  }

  handleVoto(candidato: Candidato, index: number){ 
    this.minimalCards[index] = true
    this.showVoteButton[index] = false
  }
}
