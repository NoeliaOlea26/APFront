import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

  skill: Skill[]=[];
  constructor(public skillS: SkillService) { }
  ngOnInit(): void {
    this.cargar();
  }
  cargar(): void {
    this.skillS.getSkills().subscribe(
      data => {this.skill = data;
      }
    )
  }

 borrar(id?: number){
  if(id != undefined){
    this.skillS.deleteSkill(id).subscribe(
      data =>{
        this.cargar();
      }, err =>{
        alert("no se pudo eliminar");
      }
    )
  }
 }


}
