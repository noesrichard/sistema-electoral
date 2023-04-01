import { Component } from '@angular/core';
import { Column } from 'src/app/components/table/table.component';
import { TARJETONCOLUMNS, TARJETONES } from 'src/entities/tarjeton';

@Component({
  selector: 'app-tarjetones',
  templateUrl: './tarjetones.component.html',
  styleUrls: ['./tarjetones.component.css']
})
export class TarjetonesComponent {
  title = 'sistema-electoral';
  rows: any[] = TARJETONES; 
  columns: Column[] = TARJETONCOLUMNS; 
}
