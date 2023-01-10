import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../model/experiencia.model';
@Component({
  selector: 'app-nvoexp',
  templateUrl: './nvoexp.component.html',
  styleUrls: ['./nvoexp.component.css']
})
export class NvoexpComponent implements OnInit {
  empresa: string='';
  puesto: string='';
  inicio: string='';
  fin: string='';
  descripcionAct: string='';
  logo: string='';
  constructor(private expS:ExperienciaService, private router: Router) { }
  ngOnInit(): void {
  }
  onCreate(): void {
    const exp = new Experiencia(this.empresa, this.puesto, this.inicio, this.fin, this.descripcionAct, 
      this.logo);
    this.expS.createExp(exp).subscribe(data =>{
      alert("añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("FALLO al añadir");
      this.router.navigate(['']);
    }
    )
  }
}
