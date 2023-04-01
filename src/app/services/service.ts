import { Observable } from "rxjs";

export interface Service<Entity>{ 

  create(entity: Entity): Observable<any>; 

  update(entity: Entity): Observable<any>; 

  delete(entity: Entity): Observable<any>; 

  getAll(): Observable<any>; 

}
