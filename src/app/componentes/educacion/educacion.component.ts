import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../model/educacion.model';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[]=[];
  isLogged: boolean = false;
  constructor(public educacionS: EducacionService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.cargar();
    this.isLogged =this.loginService.isLogg;
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
