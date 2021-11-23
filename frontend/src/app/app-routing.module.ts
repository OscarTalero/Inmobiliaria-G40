import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component'
import { CrearInmuebleComponent } from './components/crear-inmueble/crear-inmueble.component'
import { MainComponent } from './components/main/main.component'

import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';
import { ListarInmuebleComponent } from './components/listar-inmueble/listar-inmueble.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'listar-persona', component: ListarPersonaComponent },
  { path: 'crear-persona', component: CrearPersonaComponent },
  { path: 'editar-persona/:id', component: CrearPersonaComponent },

  { path: 'listar-inmueble', component: ListarInmuebleComponent },
  { path: 'crear-inmueble', component: CrearInmuebleComponent },
  { path: 'editar-inmueble/:id', component: CrearInmuebleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
