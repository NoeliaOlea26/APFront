import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("nav"+this.isLogged);
    console.log(this.loginService.isLogg);
    this.isLogged =this.loginService.isLogg;
    console.log("exitosamente");

  }
  salir(){
    this.isLogged =this.loginService.isLogg;
    console.log(this.isLogged);
    console.log('salir132');
    this.isLogged= false;
    console.log(this.isLogged);

  }
}
