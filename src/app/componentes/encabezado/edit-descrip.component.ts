import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/servicios/images.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from '../model/persona.model';
@Component({
  selector: 'app-edit-descrip',
  templateUrl: './edit-descrip.component.html',
  styleUrls: ['./edit-descrip.component.css']
})
export class EditDescripComponent implements OnInit {
persona: Persona=null;
  constructor(private personaS: PersonaService,
    private activatedRouter: ActivatedRoute, 
    private router: Router, public imageS: ImagesService) { }

  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.getPersona().subscribe(data => {
      this.persona = data;
    }, err => {
      alert("Error al MODIFICAR exp");
      this.router.navigate(['']);
    }    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.foto = this.imageS.url;
    console.log(this.persona);
    this.personaS.update(id, this.persona).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar exp");
      this.router.navigate(['']);
    }    );  
  }

    uploadImage($event: any) {
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "descrip" + id;
      this.imageS.uploadImage($event, name);
    }

}
