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
    this.experienciaS.getExperiencia(id).subscribe(data => {
      this.exp = data;
    }, err => {
      alert("Error añ modif exp");
      this.router.navigate(['']);
    }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.exp).subscribe(
      data => {
        this.router.navigate([' ']);
    }, err => {
      alert("Error al modificar exp");
      this.router.navigate(['']);
    }
    );
  }
}