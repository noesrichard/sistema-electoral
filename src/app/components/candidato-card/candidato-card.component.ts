import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidatoService } from 'src/app/services/candidato.service';
import { Candidato } from 'src/entities/candidato';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.css'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato;
  @Output() onDelete: EventEmitter<any> = new EventEmitter(); 


  constructor(private service: CandidatoService, private dialog: MatDialog) {}

  isUserLoggedAdmin: boolean = true;

  ngOnInit(): void {
    // if(localStorage.key("usuario") == "ADMIN"){
    //   this.isUserLoggedAdmin = true;
    // }else{
    //   this.isUserLoggedAdmin = false;
    // }
  }

  handleDelete(): void {
    this.onDelete.emit(this.candidato);
  }
}
