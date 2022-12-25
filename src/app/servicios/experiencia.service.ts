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
  
  public getExperiencia(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL+'traer/${id}');
}

  public lista(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+'mostrar');
  }

  public nvo(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL+'nuevo', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.URL+'editar/${id}',experiencia);
  }
  
  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/${id}');
  }
}
