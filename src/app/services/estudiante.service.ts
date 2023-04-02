import { Injectable } from '@angular/core';
import { Estudiante } from 'src/entities/estudiante';
import { Service } from './service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService implements Service<Estudiante>{

  URL: string = 'http://localhost:3000/estudiantes';

  constructor(private http: HttpClient) {}

  create(entity: Estudiante): Observable<any> {
    return this.http.post(this.URL, entity);
  }
  update(entity: Estudiante): Observable<any> {
    return this.http.put(this.URL+'/'+entity.id, entity);
  }
  delete(entity: Estudiante): Observable<any> {
    return this.http.delete(this.URL+'/'+entity.id);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
}
