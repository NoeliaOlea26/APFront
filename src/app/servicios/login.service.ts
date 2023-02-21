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
  console.log("usuario"+usuario);
  console.log("logg"+this.isLogg);
console.log("contra"+contrasenia);
      alert('contraseña no valida, ingrese nuevamente');
    } 
    return this.isLogg;
}

public estado:Observable<boolean> = this.estatu.asObservable();
public setestado(estatu: boolean):void {this.estatu.next(estatu);}


}
