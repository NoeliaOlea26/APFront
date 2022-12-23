import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  //en amarillo y mayuculas el objeto...en minuscula la propiedad 
persona: Persona = new Persona("","","","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data)

  }

}
