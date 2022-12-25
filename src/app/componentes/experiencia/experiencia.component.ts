import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../model/experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
// experiencia: Experiencia = new Experiencia("","","","","","");
experiencia: Experiencia[]=[];
  constructor(public experienciaS: ExperienciaService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.experienciaS.lista().subscribe(
      data => {this.experiencia = data;
      }
    )
  }

 borrar(id?: number){
  if(id != undefined){
    this.experienciaS.delete(id).subscribe(
      data =>{
        this.cargar();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
 }

}
