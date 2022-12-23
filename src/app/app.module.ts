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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
