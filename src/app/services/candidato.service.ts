import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from 'src/entities/candidato';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService implements Service<Candidato>{

  URL: string = 'http://localhost:3000/candidatos';

  constructor(private http: HttpClient) {}

  create(entity: Candidato): Observable<any> {
    return this.http.post(this.URL, entity);
  }
  update(entity: Candidato): Observable<any> {
    return this.http.put(this.URL+'/'+entity.id, entity);
  }
  delete(entity: Candidato): Observable<any> {
    return this.http.delete(this.URL+'/'+entity.id);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  getCandidatosByTarjetonId(id: number): Observable<any>{ 
    return this.http.get<any>(this.URL+'?tarjetonId='+id);
  }

  getByCandidatoId(id: number): Observable<any>{
    return this.http.get<any>(this.URL+'?id='+id);
  }

  getCandidatosAndVotosByTarjeton(id: number): Observable<any>{
    return this.http.get<any>(this.URL+'?_embed=votos&tarjetonId='+id);
  }

}
