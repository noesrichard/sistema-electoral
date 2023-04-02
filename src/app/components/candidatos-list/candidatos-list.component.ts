import { Component, OnInit } from '@angular/core';
import { CandidatoService } from 'src/app/services/candidato.service';
import { Candidato } from 'src/entities/candidato';

@Component({
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css'],
})
export class CandidatosListComponent implements OnInit {

  candidatos: Candidato[] = []; 

  constructor(private candidatoService: CandidatoService) {}

  ngOnInit(): void {
    this.candidatoService.getAll().subscribe({
      next: (response) => { 
        this.candidatos = response; 
      }
    })

  }
}
