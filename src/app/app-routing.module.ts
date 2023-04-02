import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatosListComponent } from './components/candidatos-list/candidatos-list.component';
import { CandidatosComponent } from './views/candidatos/candidatos.component';
import { EstudiantesComponent } from './views/estudiantes/estudiantes.component';
import { ResultadosViewComponent } from './views/resultados-view/resultados-view.component';
import { TarjetonesComponent } from './views/tarjetones/tarjetones.component';

const routes: Routes = [
  {path: 'inicio', component: AppComponent},
  {path: 'candidatos/:tarjetonId', component: CandidatosComponent},
  {path: 'tarjetones', component: TarjetonesComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: 'resultados', component: ResultadosViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
