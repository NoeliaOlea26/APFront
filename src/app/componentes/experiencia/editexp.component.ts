import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from '../model/experiencia.model';
@Component({
  selector: 'app-editexp',
  templateUrl: './editexp.component.html',
  styleUrls: ['./editexp.component.css']
})
export class EditexpComponent implements OnInit {
exp: Experiencia= null;

  constructor(private experienciaS: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.findexp(id).subscribe(data => {
      this.exp = data;
    }, err => {
      alert("Error al MODIFICAR exp");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.exp);
    this.experienciaS.editExperiencia(id, this.exp).subscribe(
      data => {
       // console.log(this.exp);
        this.router.navigate(['']);
    }, err => {
      console.log(err);
      alert("Error al modificar exp");
      this.router.navigate(['']);
    }    );  }
}
