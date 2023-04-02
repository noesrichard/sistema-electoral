import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/entities/curso';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class CursoService implements Service<Curso>{

  URL: string = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  create(entity: Curso): Observable<any> {
    return this.http.post(this.URL, entity);
  }
  update(entity: Curso): Observable<any> {
    return this.http.put(this.URL+'/'+entity.id, entity);
  }
  delete(entity: Curso): Observable<any> {
    return this.http.delete(this.URL+'/'+entity.id);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  getById(id: number): Observable<any>{ 
    return this.http.get<any>(this.URL+'?id='+id);
  }


}
