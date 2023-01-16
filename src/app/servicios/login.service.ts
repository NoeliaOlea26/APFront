import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IniciarSesionComponent } from '../componentes/iniciar-sesion/iniciar-sesion.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  isLogg: boolean = false;
  usuario: string;
  contrasenia: string;

  private estatu : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLogg);
  
  constructor( private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    //console.log(this.login);
    console.log("Est Serv Log"+this.isLogg);
  }


login(usuario: string, contrasenia: string) {
if (usuario==='admin' && contrasenia==='admin')
{this.isLogg = true;
this.router.navigate(['']);
console.log("exitoooooooo"+this.isLogg);
console.log("serv"+usuario);
console.log("serv"+contrasenia);
}
else{
  console.log("0000"+usuario);
  console.log("F"+this.isLogg);
console.log("0"+contrasenia);
      alert('contraseña no valida, ingrese nuevamente');
    } 
    return this.isLogg;
}
// public s(reslog: boolean): Observable<boolean> {
// return this.login(this.usuario, this.contrasenia);
// }

public estado:Observable<boolean> = this.estatu.asObservable();
public setestado(estatu: boolean):void {this.estatu.next(estatu);}

//   public validar(): void
// {if (this.iniciar.isLogged === true){
// this.isLogg = true;
// console.log("parte login Eci6o"+this.isLogg);
// }console.log("parte login Daik"+this.isLogg);
// }
  // public getInputValue(inputValue:string, inputValue2:string){
  //   var estado = false;
  //   console.log(inputValue, inputValue2);
  //   //inputValue = inputValue.trim();
  //   if (inputValue=='admin' && inputValue2=='admin') {
  //   this.isLogged =true;
  //   this.router.navigate(['']);
  //   estado = true;
  //   return console.log("exito", this.isLogged);}
  //   else{
  //     alert('contraseña no valida, ingrese nuevamente');
  //   } 
  // }

}
