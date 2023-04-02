import { Component, Input, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/entities/curso';
import { Tarjeton, VOIDTARJETON } from 'src/entities/tarjeton';
import { MultiSelectOption } from '../../multi-select/multi-select.component';

@Component({
  selector: 'app-tarjeton-form',
  templateUrl: './tarjeton-form.component.html',
  styleUrls: ['./tarjeton-form.component.css'],
})
export class TarjetonFormComponent implements OnInit {
  @Input() tarjeton: Tarjeton = VOIDTARJETON;
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

  handleChange(event: Event) {
    console.log("hola")
  }
}
