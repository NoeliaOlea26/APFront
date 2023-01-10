import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../model/educacion.model';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[]=[];
  constructor(public educacionS: EducacionService) { }
  ngOnInit(): void {
    this.cargar();
  }
  cargar(): void {
    this.educacionS.getEducaciones().subscribe(
      data => {this.educacion = data;
      }
    )
  }

 borrar(id?: number){
  if(id != undefined){
    this.educacionS.deleteEduc(id).subscribe(
      data =>{
        this.cargar();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
 }


}
