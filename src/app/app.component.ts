import { Component } from '@angular/core';
import { TARJETONCOLUMNS, TARJETONES } from 'src/entities/tarjeton';
import { Column } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-electoral';
  rows: any[] = TARJETONES; 
  columns: Column[] = TARJETONCOLUMNS; 
}
