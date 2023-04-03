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
import { TarjetonesViewComponent } from './views/tarjetones-view/tarjetones-view.component';
import { TarjetonFormComponent } from './components/forms/tarjeton-form/tarjeton-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EstudianteFormComponent } from './components/forms/estudiante-form/estudiante-form.component';
import { BasicInputComponent } from './components/inputs/basic-input/basic-input.component';
import { FormButtonsComponent } from './components/buttons/form-buttons/form-buttons.component';
import { TarjetonFormDialogComponent } from './components/dialogs/tarjeton-form-dialog/tarjeton-form-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { EstudiantesViewComponent } from './views/estudiantes-view/estudiantes-view.component';
import { EstudianteFormDialogComponent } from './components/dialogs/estudiante-form-dialog/estudiante-form-dialog.component';
import { CandidatoCardComponent } from './components/candidato-card/candidato-card.component';
import { MatCardModule } from '@angular/material/card';
import { CandidatosListComponent } from './components/candidatos-list/candidatos-list.component';
import { CandidatosViewComponent } from './views/candidatos-view/candidatos-view.component';
import { CandidatoFormDialogComponent } from './components/dialogs/candidato-form-dialog/candidato-form-dialog.component';
import { CandidatoFormComponent } from './components/forms/candidato-form/candidato-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { MatSelectModule } from '@angular/material/select';
import { ResultadosViewComponent } from './views/resultados-view/resultados-view.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BasicCrudComponent,
    TarjetonesViewComponent,
    TarjetonFormComponent,
    EstudianteFormComponent,
    BasicInputComponent,
    FormButtonsComponent,
    TarjetonFormDialogComponent,
    DeleteDialogComponent,
    EstudiantesViewComponent,
    EstudianteFormDialogComponent,
    CandidatoCardComponent,
    CandidatosListComponent,
    CandidatosViewComponent,
    CandidatoFormDialogComponent,
    CandidatoFormComponent,
    MultiSelectComponent,
    ResultadosViewComponent,
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
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
