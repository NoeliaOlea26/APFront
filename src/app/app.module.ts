import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftSkillsComponent } from './componentes/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NavComponent } from './componentes/nav/nav.component';
// import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { NvoexpComponent } from './componentes/experiencia/nvoexp.component';
import { FormsModule } from '@angular/forms';
import { EditexpComponent } from './componentes/experiencia/editexp.component';
import { EditAcercaDeMiComponent } from './componentes/acerca-de-mi/edit-acerca-de-mi.component';
import { EditDescripComponent } from './componentes/encabezado/edit-descrip.component';
import { EditeducComponent } from './componentes/educacion/editeduc.component';
import { NvoeducComponent } from './componentes/educacion/nvoeduc.component';
import { EditproyComponent } from './componentes/proyectos/editproy.component';
import { NvoproyComponent } from './componentes/proyectos/nvoproy.component';
import { NvohysComponent } from './componentes/hard-soft-skills/nvohys.component';
import { EdithysComponent } from './componentes/hard-soft-skills/edithys.component';
import { LoginpruebComponent } from './componentes/loginprueb/loginprueb.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    NavComponent,
    // IniciarSesionComponent,
    PortfolioComponent,
    NvoexpComponent,
    EditexpComponent,
    EditAcercaDeMiComponent,
    EditDescripComponent,
    EditeducComponent,
    NvoeducComponent,
    EditproyComponent,
    NvoproyComponent,
    NvohysComponent,
    EdithysComponent,
    LoginpruebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
