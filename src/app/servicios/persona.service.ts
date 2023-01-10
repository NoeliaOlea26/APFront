import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../componentes/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: string = 'http://localhost:8080/personas/';
  constructor(private http: HttpClient) { }
    public getPersona(): Observable<Persona>{
        return this.http.get<Persona>(this.URL+'traer/miperfil');
  }
  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL+`editar/${id}`,persona);
  }
  public findper(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL +`traer/${id}`);
}
  

}
