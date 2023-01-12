import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-nvohys',
  templateUrl: './nvohys.component.html',
  styleUrls: ['./nvohys.component.css']
})
export class NvohysComponent implements OnInit {
  titulo: string='';
  porcentaje: number= null;
  color: string='';
  fontsize: string='';
  outSC: string='';
  innSC: string='';
  constructor(private skillS:SkillService, private router: Router) { }
  ngOnInit(): void {
  }
  onCreate(): void {
    const skill = new Skill(this.titulo, this.porcentaje, this.color, this.fontsize, this.outSC, 
      this.innSC);
      this.skillS.createSkill(skill).subscribe(data =>{
      alert("añadido correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("FALLO al añadir");
      this.router.navigate(['']);
    }
    )
  }
}
