import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NvoexpComponent } from './componentes/experiencia/nvoexp.component';
// import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
// {path: 'iniciar-sesion', component:IniciarSesionComponent},
// {path:'', redirectTo: 'iniciar-sesion',pathMatch: 'full'}
{path:'', redirectTo: 'portfolio',pathMatch: 'full'},
{path: 'nvaexp', component:NvoexpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
