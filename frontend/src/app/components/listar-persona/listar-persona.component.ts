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
      console.log(data);
      this.listPersonas = data;
    }, error => {
      console.log(error);
    })
  }

}
