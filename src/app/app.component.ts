import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/app/entities/estudiante';
import { TARJETONCOLUMNS, TARJETONES } from 'src/app/entities/tarjeton';
import { Column } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sistema-electoral';

}

