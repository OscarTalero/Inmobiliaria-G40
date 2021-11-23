import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';
import { CrearInmuebleComponent } from './components/crear-inmueble/crear-inmueble.component';
import { ListarInmuebleComponent } from './components/listar-inmueble/listar-inmueble.component';
import { MainComponent } from './components/main/main.component';
//import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListarPersonaComponent,
    CrearInmuebleComponent,
    ListarInmuebleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
