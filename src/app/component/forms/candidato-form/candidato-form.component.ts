import { Component, Input } from '@angular/core';
import { Candidato, VOIDCANDIDATO } from 'src/entities/candidato';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css']
})
export class CandidatoFormComponent {
  @Input() candidato: Candidato = VOIDCANDIDATO;

}
