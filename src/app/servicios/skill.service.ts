import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../componentes/model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL: string = 'http://localhost:8080/skill/';
  constructor(private http: HttpClient) { }
  
  public findSkill(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL +`traer/${id}`);
}//+'traer/'+`${id}`);

  public getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL+'mostrar');
  }

  public createSkill(proyecto: Skill): Observable<any>{
    return this.http.post<any>(this.URL+'nuevo', proyecto);
  }

  public editSkill(id: number, proyecto: Skill): Observable<any>{
    return this.http.put<any>(this.URL+`editar/${id}`, proyecto);
  }//'editar/'+
  
  public deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+`borrar/${id}`);
  }//'borrar/${id}'

}
