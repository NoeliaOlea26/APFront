import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../componentes/model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL: string = 'http://localhost:8080/experiencia/';
  constructor(private http: HttpClient) { }
  
  public findexp(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL +`traer/${id}`);
}//+'traer/'+`${id}`);

  public getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+'mostrar');
  }

  public createExp(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL+'nuevo', experiencia);
  }

  public editExperiencia(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.URL+`editar/${id}`, experiencia);
  }//'editar/'+
  
  public deleteExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }//'borrar/${id}'




}
