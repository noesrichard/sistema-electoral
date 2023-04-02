import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BasicCrudComponent } from './components/basic-crud/basic-crud.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TarjetonesComponent } from './views/tarjetones/tarjetones.component';
import { TarjetonFormComponent } from './components/forms/tarjeton-form/tarjeton-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EsduianteFormComponent } from './components/forms/esduiante-form/esduiante-form.component';
import { BasicInputComponent } from './components/inputs/basic-input/basic-input.component';
import { FormButtonsComponent } from './components/buttons/form-buttons/form-buttons.component';
import { TarjetoFormDialogComponent } from './components/dialogs/tarjeto-form-dialog/tarjeto-form-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { EstudiantesComponent } from './views/estudiantes/estudiantes.component';
import { EstudianteFormDialogComponent } from './components/dialogs/estudiante-form-dialog/estudiante-form-dialog.component';
import { CandidatoCardComponent } from './components/candidato-card/candidato-card.component';
import { MatCardModule } from '@angular/material/card';
import { CandidatosListComponent } from './components/candidatos-list/candidatos-list.component';
import { CandidatosComponent } from './views/candidatos/candidatos.component';
import { CandidatoFormDialogComponent } from './components/dialogs/candidato-form-dialog/candidato-form-dialog.component';
import { CandidatoFormComponent } from './component/forms/candidato-form/candidato-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BasicCrudComponent,
    TarjetonesComponent,
    TarjetonFormComponent,
    EsduianteFormComponent,
    BasicInputComponent,
    FormButtonsComponent,
    TarjetoFormDialogComponent,
    DeleteDialogComponent,
    EstudiantesComponent,
    EstudianteFormDialogComponent,
    CandidatoCardComponent,
    CandidatosListComponent,
    CandidatosComponent,
    CandidatoFormDialogComponent,
    CandidatoFormComponent,
    MultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
