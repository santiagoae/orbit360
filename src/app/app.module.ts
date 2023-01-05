import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DondeLlegamosComponent } from './components/donde-llegamos/donde-llegamos.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanesComponent } from './components/planes/planes.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    ServiciosComponent,
    DondeLlegamosComponent,
    TestimoniosComponent,
    EquipoComponent,
    FooterComponent,
    PlanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
