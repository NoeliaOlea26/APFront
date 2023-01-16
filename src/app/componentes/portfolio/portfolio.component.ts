import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("Est Portfolio Log"+this.isLogged);
    console.log("Est Serv en Port Log"+this.loginService.isLogg);
    this.isLogged = this.loginService.isLogg;
        console.log("Est Portfolio Log"+this.isLogged);
    console.log("Est Serv en Port Log"+this.loginService.isLogg);

  }

}
