import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../model/experiencia.model';
import { TestService } from 'src/app/servicios/test.service';
import {ImagenexpService} from 'src/app/servicios/imagenexp.service';

@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.css']
})
export class EditexpComponent implements OnInit {
exp: Experiencia= null;

  constructor(private experienciaS: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router, public imagenes: ImagenexpService )//, public imagenes: TestService
    //, public imagen: ImagenexpService
     { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.experienciaS.findexp(id).subscribe(data => {
      this.exp = data;
      console.log(data);
    }, err => {
      alert("Error al MODIFICAR exp");
      this.router.navigate(['']);
    }    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
   //this.exp.logo = this.imagen.downloadURL1;
    this.exp.logo = this.imagenes.url;
    
    console.log(this.exp.logo+'experiencia cargada');
    this.experienciaS.editExperiencia(id, this.exp).subscribe(
      data => {
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar exp");
      this.router.navigate(['']);
    }    );  
  }

    uploadImagen($event: any) {
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "exp_" + id;
      console.log(name);
      this.imagenes.uploadImage($event, name);
      //this.imagen.uploadImage($event, name);
      console.log(name + "cargada");     
    }

}
