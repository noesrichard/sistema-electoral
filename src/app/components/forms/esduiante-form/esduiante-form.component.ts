import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante, VOIDESTUDIANTE } from 'src/entities/estudiante';

@Component({
  selector: 'app-esduiante-form',
  templateUrl: './esduiante-form.component.html',
  styleUrls: ['./esduiante-form.component.css'],
})
export class EsduianteFormComponent {
  @Input() estudiante: Estudiante = VOIDESTUDIANTE;



}
