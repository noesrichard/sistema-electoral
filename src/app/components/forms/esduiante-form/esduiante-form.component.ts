import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/entities/estudiante';

@Component({
  selector: 'app-esduiante-form',
  templateUrl: './esduiante-form.component.html',
  styleUrls: ['./esduiante-form.component.css'],
})
export class EsduianteFormComponent {
  @Input() estudiante: Estudiante = {
    id: null,
    curso: null,
    cedula: null,
    nombre: null,
    sede: null,
    jornada: null,
    email: null,
  };



}
