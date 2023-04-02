import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatosListComponent } from './components/candidatos-list/candidatos-list.component';
import { CandidatosViewComponent } from './views/candidatos-view/candidatos-view.component';
import { EstudiantesViewComponent } from './views/estudiantes-view/estudiantes-view.component';
import { ResultadosViewComponent } from './views/resultados-view/resultados-view.component';
import { TarjetonesViewComponent } from './views/tarjetones-view/tarjetones-view.component';

const routes: Routes = [
  {path: 'inicio', component: AppComponent},
  {path: 'candidatos/:tarjetonId', component: CandidatosViewComponent},
  {path: 'tarjetones', component: TarjetonesViewComponent},
  {path: 'estudiantes', component: EstudiantesViewComponent},
  {path: 'resultados', component: ResultadosViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
