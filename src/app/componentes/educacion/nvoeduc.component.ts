import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImagesService } from 'src/app/servicios/images.service';
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
  constructor(private educS:EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router, public imageS: ImagesService) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
  }
  onCreate(): void {
    const educ = new Educacion(this.escuela, this.titulo, this.inicio, this.fin,  this.logo);
    this.logo = this.imageS.url;
    this.educS.createEduc(educ).subscribe(data =>{
      alert("añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("FALLO al añadir");
      this.router.navigate(['']);
    }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "escuela" + id;
    this.imageS.uploadImage($event, name);
  }

}
