import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeton } from 'src/entities/tarjeton';
import { Voto } from 'src/entities/voto';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class VotoService {
  URL: string = 'http://localhost:3000/votos';

  constructor(private http: HttpClient) {}

  create(entity: Voto): Observable<any> {
    return this.http.post(this.URL, entity);
  }
  update(entity: Voto): Observable<any> {
    return this.http.put(this.URL+'/'+entity.id, entity);
  }
  delete(entity: Voto): Observable<any> {
    return this.http.delete(this.URL+'/'+entity.id);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  getById(id: number): Observable<any>{ 
    return this.http.get<any>(this.URL+'?id='+id);
  }

  getByCandidatoId(id: number): Observable<any>{ 
    return this.http.get<any>(this.URL+'?candidatoId='+id);
  }

  getByEstudianteId(id: number): Observable<any>{ 
    return this.http.get<any>(this.URL+'?estudianteId='+id);
  }

}
