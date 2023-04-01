import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/entities/estudiante';
import { TARJETONCOLUMNS, TARJETONES } from 'src/entities/tarjeton';
import { Column } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sistema-electoral';
  rows: any[] = TARJETONES;
  columns: Column[] = TARJETONCOLUMNS;

  @Input() estudiante: Estudiante = {
    id: null,
    curso: null,
    cedula: null,
    nombre: null,
    sede: null,
    jornada: null,
    email: null,
  };

  handleSave(){ 
    console.log(this.estudiante)
  }
}

