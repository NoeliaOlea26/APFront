import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-edit-acerca-de-mi',
  templateUrl: './edit-acerca-de-mi.component.html',
  styleUrls: ['./edit-acerca-de-mi.component.css']
})
export class EditAcercaDeMiComponent implements OnInit {
  persona: Persona=null;
  constructor(private personaS: PersonaService,
    private activatedRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.getPersona().subscribe(data => {
      this.persona = data;
    }, err => {
      alert("Error al MODIFICAR descrip");
      this.router.navigate(['']);
    }    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.persona);
    this.personaS.update(id, this.persona).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar descrip");
      this.router.navigate(['']);
    }    );  }

}
