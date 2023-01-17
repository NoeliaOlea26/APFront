import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../model/experiencia.model';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
// experiencia: Experiencia = new Experiencia("","","","","","");
experiencia: Experiencia[]=[];
isLogged: boolean = false;
  constructor(public experienciaS: ExperienciaService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.cargar();
    this.isLogged =this.loginService.isLogg;
  }
  cargar(): void {
    this.experienciaS.getExperiencias().subscribe(
      data => {this.experiencia = data;
      }
    )
  }

 borrar(id?: number){
  if(id != undefined){
    this.experienciaS.deleteExperiencia(id).subscribe(
      data =>{
        this.cargar();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
 }


}
