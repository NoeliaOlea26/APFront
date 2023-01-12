import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from '../model/proyecto.model';

@Component({
  selector: 'app-nvoproy',
  templateUrl: './nvoproy.component.html',
  styleUrls: ['./nvoproy.component.css']
})
export class NvoproyComponent implements OnInit {
  nombre: string='';
  anio: string='';
  descripcion: string='';
  link: string='';
  captura: string='';
  constructor(private proyS:ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.anio, this.descripcion, this.link,  this.captura);
    this.proyS.createProyecto(proy).subscribe(data =>{
      alert("añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("FALLO al añadir");
      this.router.navigate(['']);
    }
    )
  }
}

