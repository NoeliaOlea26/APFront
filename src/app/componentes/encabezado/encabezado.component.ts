import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
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
  isLogged: boolean = false;
  constructor(public personaService: PersonaService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data);
    this.isLogged =this.loginService.isLogg;

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
