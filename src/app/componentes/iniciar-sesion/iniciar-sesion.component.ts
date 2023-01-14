import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
    isLogged: boolean = false;
//form:FormGroup;
  constructor( private activatedRouter: ActivatedRoute,
    private router: Router, private loginService: LoginService) { }//private formBuilder:FormBuilder
    ngOnInit(): void {
        console.log(this.isLogged);

       //this.Login();
        throw new Error('Method not implemented.');
    }
    public getInputValue(inputValue:string, inputValue2:string){
      var estado = false;
      console.log(inputValue, inputValue2);
      //inputValue = inputValue.trim();
      if (inputValue=='admin' && inputValue2=='admin') {
      this.isLogged =true;
      this.router.navigate(['']);
      estado = true;
      return console.log("exito", this.isLogged);}
      else{
        alert('contraseña no valida, ingrese nuevamente');
      }
    } 
    login(inputValue:string, inputValue2:string){
      console.log("antes"+this.isLogged);
      this.loginService.login(inputValue, inputValue2);
      if(this.loginService.isLogg===true){
        this.isLogged =true;
        console.log("dps"+this.isLogged);
      }
      //this.isLogged =true;
      console.log("dps"+this.isLogged);
     // this.router.navigate(['']);
    }
//this.form = this.formBuilder.group({
    //Login(){ 
        //var done=0; 
      //   var input =document.getElementById("usuario").value;
      //   console.log("usuario");
      //   var contrasenia=document.getElementById("contrasenia");
      //   console.log("contrasenia");
      //   if (usuario=="admin" && contrasenia=="admin") { 
      //   //window.location="TU_PAGINA_WEB.HTML"; 
      //   this.isLogged = true;
      //   alert("Entró");
      //   this.router.navigate(['']);
      //   } 
      //   if (usuario=="usuario" && contrasenia=="usuario") { 
      //       alert("NO admin");
      //       this.router.navigate(['']);
      //  // window.location="TU_PAGINA_WEB.HTML"; 
      //   } 
      //   if (usuario=="" && contrasenia=="") { 
      //  // window.location="errorpopup.html"; 
      //  alert("Complete los campos");
      //   } 
       

}
//   ngOnInit(): void {
//   }


