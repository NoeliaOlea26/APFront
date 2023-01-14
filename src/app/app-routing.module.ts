import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeMiComponent } from './componentes/acerca-de-mi/edit-acerca-de-mi.component';
import { EditeducComponent } from './componentes/educacion/editeduc.component';
import { NvoeducComponent } from './componentes/educacion/nvoeduc.component';
import { EditDescripComponent } from './componentes/encabezado/edit-descrip.component';
import { EditexpComponent } from './componentes/experiencia/editexp.component';
import { NvoexpComponent } from './componentes/experiencia/nvoexp.component';
import { EdithysComponent } from './componentes/hard-soft-skills/edithys.component';
import { NvohysComponent } from './componentes/hard-soft-skills/nvohys.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { LoginpruebComponent } from './componentes/loginprueb/loginprueb.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditproyComponent } from './componentes/proyectos/editproy.component';
import { NvoproyComponent } from './componentes/proyectos/nvoproy.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
{path: 'iniciar-sesion', component:IniciarSesionComponent},
// {path:'', redirectTo: 'iniciar-sesion',pathMatch: 'full'}
{path:'', redirectTo: 'portfolio',pathMatch: 'full'},
{path:'', component:PortfolioComponent},
{path:'editarexp/:id', component:EditexpComponent},
{path: 'nuevaexp', component:NvoexpComponent},
{path: 'editarper/:id', component:EditDescripComponent},
{path: 'editardescrip/:id', component:EditAcercaDeMiComponent},
{path:'editaredu/:id', component:EditeducComponent},
{path: 'nuevaedu', component: NvoeducComponent},
{path: 'editarproy/:id', component:EditproyComponent},
{path: 'nuevoproy', component:NvoproyComponent},
{path: 'nuevaskill', component:NvohysComponent},
{path: 'editarskill/:id', component:EdithysComponent},
{path: 'login', component:LoginpruebComponent}
//LoginpruebComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
