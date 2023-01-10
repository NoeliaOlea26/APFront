import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../componentes/model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL: string = 'http://localhost:8080/educacion/';
  constructor(private http: HttpClient) { }
  
  public findeduc(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL +`traer/${id}`);
}//+'traer/'+`${id}`);

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+'mostrar');
  }

  public createEduc(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.URL+'nuevo', educacion);
  }

  public editEduc(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL+`editar/${id}`, educacion);
  }//'editar/'+
  
  public deleteEduc(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }//'borrar/${id}'

}
