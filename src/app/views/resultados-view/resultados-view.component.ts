import { Component, OnInit } from '@angular/core';
import { TarjetonService } from 'src/app/services/tarjeton.service';
import { Tarjeton } from 'src/app/entities/tarjeton';

@Component({
  selector: 'app-resultados-view',
  templateUrl: './resultados-view.component.html',
  styleUrls: ['./resultados-view.component.css'],
})
export class ResultadosViewComponent implements OnInit {
  tarjetones: Tarjeton[] = [];

  constructor(private tarjetonesService: TarjetonService) {}

  ngOnInit(): void {
    this.tarjetonesService.getAll().subscribe({
      next: (response: Tarjeton[]) => {
        this.tarjetones = response;
      }
    })
  }
}
