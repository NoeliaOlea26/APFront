import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-loginprueb',
  templateUrl: './loginprueb.component.html',
  styleUrls: ['./loginprueb.component.css']
})
export class LoginpruebComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
login(form:NgForm){
  const usuario = form.value.usuario;
  console.log(usuario);
  const contrasenia = form.value.contrasenia;
  console.log(usuario);
  this.loginService.login(usuario, contrasenia);
}
}
