import { Component, Input } from '@angular/core';
import { Candidato } from 'src/entities/candidato';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css']
})
export class CandidatoFormComponent {
  @Input() candidato: Candidato = { 
    id: null, nombre: null, tarjetonId: null,
  }

}
