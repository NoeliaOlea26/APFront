import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from '../model/persona.model';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona: Persona = new Persona("","","","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data)

  }
  

  // miportfolio:any;

  // constructor(private datosPortfolio:PortfolioService) { }
  // ngOnInit(): void {
  //   this.datosPortfolio.obtenerDatos().subscribe(data => {
  //     console.log(data);
  //     this.miportfolio = data;
  //   });

  // }

}
