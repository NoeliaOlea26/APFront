import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../componentes/model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL: string = 'http://localhost:8080/proyecto/';
  constructor(private http: HttpClient) { }
  
  public findProyecto(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL +`traer/${id}`);
}//+'traer/'+`${id}`);

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL+'mostrar');
  }

  public createProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.URL+'nuevo', proyecto);
  }

  public editProyecto(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.URL+`editar/${id}`, proyecto);
  }//'editar/'+
  
  public deleteProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }//'borrar/${id}'

}
