import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../model/proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[]=[];
  constructor(public proyectoS: ProyectoService) { }
  ngOnInit(): void {
    this.cargar();
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