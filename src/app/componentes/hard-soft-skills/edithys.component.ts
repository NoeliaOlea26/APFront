import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})
export class EdithysComponent implements OnInit {
  skill: Skill= null;

  constructor(private SkillS: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SkillS.findSkill(id).subscribe(data => {
      this.skill = data;
    }, err => {
      alert("Error al MODIFICAR educ");
      this.router.navigate(['']);
    }    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.skill);
    this.SkillS.editSkill(id, this.skill).subscribe(
      data => {
        console.log(this.skill);
        this.router.navigate(['']);
        alert("modificado correcto");
    }, err => {
      console.log(err);
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }    );  }
}
