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
import {MatIconModule} from '@angular/material/icon';
import { TarjetonesComponent } from './views/tarjetones/tarjetones.component';
import { TarjetonFormComponent } from './components/forms/tarjeton-form/tarjeton-form.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EsduianteFormComponent } from './components/forms/esduiante-form/esduiante-form.component';
import { BasicInputComponent } from './components/inputs/basic-input/basic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BasicCrudComponent,
    TarjetonesComponent,
    TarjetonFormComponent,
    CreateDialogComponent,
    EsduianteFormComponent,
    BasicInputComponent
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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
