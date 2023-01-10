import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeMiComponent } from './componentes/acerca-de-mi/edit-acerca-de-mi.component';
import { EditDescripComponent } from './componentes/encabezado/edit-descrip.component';
import { EditexpComponent } from './componentes/experiencia/editexp.component';
import { NvoexpComponent } from './componentes/experiencia/nvoexp.component';
// import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
// {path: 'iniciar-sesion', component:IniciarSesionComponent},
// {path:'', redirectTo: 'iniciar-sesion',pathMatch: 'full'}
{path:'', redirectTo: 'portfolio',pathMatch: 'full'},
{path:'', component:PortfolioComponent},
{path:'editarexp/:id', component:EditexpComponent},
{path: 'nuevaexp', component:NvoexpComponent},
{path: 'editarper/:id', component:EditDescripComponent},
{path: 'editardescrip/:id', component:EditAcercaDeMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
