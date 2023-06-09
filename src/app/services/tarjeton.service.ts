import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeton } from 'src/app/entities/tarjeton';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class TarjetonService implements Service<Tarjeton> {
  URL: string = 'http://localhost:3000/tarjetones';

  constructor(private http: HttpClient) {}

  create(entity: Tarjeton): Observable<any> {
    return this.http.post(this.URL, entity);
  }
  update(entity: Tarjeton): Observable<any> {
    return this.http.put(this.URL+'/'+entity.id, entity);
  }
  delete(entity: Tarjeton): Observable<any> {
    return this.http.delete(this.URL+'/'+entity.id);
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(this.URL+'?id='+id);
  }
}
