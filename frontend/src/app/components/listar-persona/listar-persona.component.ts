import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

  listPersonas: Persona[] = [];

  constructor(private _personaService: PersonaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas() {
    this._personaService.getPersonas().subscribe(data => {
      this.listPersonas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPersona(id: any){
    this._personaService.eliminarPersona(id).subscribe(data => {
      this.toastr.error('La persona fue eliminada correctamente', 'Persona Eliminada');
      this.obtenerPersonas();
    }, error => {
      console.log(error);
    })
  }
}
