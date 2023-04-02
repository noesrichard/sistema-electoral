import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CandidatosListComponent } from 'src/app/components/candidatos-list/candidatos-list.component';
import { CandidatoFormDialogComponent } from 'src/app/components/dialogs/candidato-form-dialog/candidato-form-dialog.component';
import { CandidatoService } from 'src/app/services/candidato.service';
import { Router } from '@angular/router';
import { Tarjeton, VOIDTARJETON } from 'src/app/entities/tarjeton';
import { TarjetonService } from 'src/app/services/tarjeton.service';

@Component({
  selector: 'app-candidatos-view-view',
  templateUrl: './candidatos-view.component.html',
  styleUrls: ['./candidatos-view.component.css'],
})
export class CandidatosViewComponent implements OnInit {

  @ViewChild(CandidatosListComponent) candidatosListComponent: CandidatosListComponent;
  tarjetonId: number = 1;
  tarjeton: Tarjeton = VOIDTARJETON;

  constructor(
    private dialog: MatDialog,
    private candidatoService: CandidatoService,
    private tarjetonService: TarjetonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tarjetonId = params['tarjetonId'];
      this.tarjetonService.getById(this.tarjetonId).subscribe({
        next: (response)=> {
          this.tarjeton = response[0];
        }
      })
    });
  }

  handleNew() {
    const dialogRef = this.dialog.open(CandidatoFormDialogComponent, {
      data: {
        candidato: { id: null, nombre: null, tarjetonId: this.tarjetonId },
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.candidatoService.create(result).subscribe({next:
          () => {
            this.candidatosListComponent.getData();
          }
        });
      }
    })
  }

  handleBack(): void{
    this.router.navigate(['tarjetones'])
  }
}
