import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../model/educacion.model';

@Component({
  selector: 'app-nvoeduc',
  templateUrl: './nvoeduc.component.html',
  styleUrls: ['./nvoeduc.component.css']
})
export class NvoeducComponent implements OnInit {
  escuela: string='';
  titulo: string='';
  inicio: string='';
  fin: string='';
  logo: string='';
  constructor(private educS:EducacionService, private router: Router) { }
  ngOnInit(): void {
  }
  onCreate(): void {
    const educ = new Educacion(this.escuela, this.titulo, this.inicio, this.fin,  this.logo);
    this.educS.createEduc(educ).subscribe(data =>{
      alert("añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("FALLO al añadir");
      this.router.navigate(['']);
    }
    )
  }
}
