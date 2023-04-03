import { Component, Input, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/entities/estudiante';
import { Tarjeton, TARJETONCOLUMNS, TARJETONES } from 'src/app/entities/tarjeton';
import { Column } from './components/table/table.component';
import { Candidato } from './entities/candidato';
import { CandidatoService } from './services/candidato.service';
import { TarjetonService } from './services/tarjeton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  tarjetones: Tarjeton[] = []; 
  constructor(private tarjetonService: TarjetonService){}

  ngOnInit(): void {
    this.tarjetonService.getAll().subscribe({ 
      next: (response: Tarjeton[]) => { 
        this.tarjetones = response; 
      }
    })
  }
}
