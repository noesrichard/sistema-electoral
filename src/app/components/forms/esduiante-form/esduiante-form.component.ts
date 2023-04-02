import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/entities/curso';
import { Estudiante, VOIDESTUDIANTE } from 'src/entities/estudiante';
import { MultiSelectOption } from '../../multi-select/multi-select.component';

@Component({
  selector: 'app-esduiante-form',
  templateUrl: './esduiante-form.component.html',
  styleUrls: ['./esduiante-form.component.css'],
})
export class EsduianteFormComponent {
  @Input() estudiante: Estudiante = VOIDESTUDIANTE;
  options: MultiSelectOption[] = [];

  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.cursosService.getAll().subscribe({
      next: (response: Curso[]) => {
        response.forEach((curso) => {
          this.options.push({
            id: curso.id,
            label: curso.nombre,
            selected: false,
          });
        });
      },
    });
  }
}
