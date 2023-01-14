import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  //en amarillo y mayuculas el objeto...en minuscula la propiedad 
  isLogged: boolean = false;
persona: Persona = new Persona("","","","","");
  constructor(public personaService: PersonaService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data);
    console.log("nav"+this.isLogged);
    console.log(this.loginService.isLogg);
    this.isLogged =this.loginService.isLogg;
    console.log("exitosamente");
    //this.loginService.login(this.loginService.usuario, this.loginService.contrasenia)

  }

}
