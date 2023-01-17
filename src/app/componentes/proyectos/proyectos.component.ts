import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../model/proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[]=[];
  isLogged: boolean = false;
  constructor(public proyectoS: ProyectoService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.cargar();
    this.isLogged =this.loginService.isLogg;
  }
  cargar(): void {
    this.proyectoS.getProyectos().subscribe(
      data => {this.proyecto = data;
      }
    )
  }

 borrar(id?: number){
  if(id != undefined){
    this.proyectoS.deleteProyecto(id).subscribe(
      data =>{
        this.cargar();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
 }


}