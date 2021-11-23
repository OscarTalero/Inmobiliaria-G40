import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  personaForms: FormGroup;
  titulo = 'REGISTRAR PERSONA';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _personaService: PersonaService,
              private aRouter: ActivatedRoute) {
    this.personaForms = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]  // Validators.(longitud, tipo, etc)
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarPersona();
  }

adicionarPersona() {
  console.log(this.personaForms)

  console.log(this.personaForms.get('nombre')?.value);

  const PERSONA: Persona = {
    nombre: this.personaForms.get('nombre')?.value,
    correo: this.personaForms.get('correo')?.value,
    telefono: this.personaForms.get('telefono')?.value,
  }

  if(this.id !== null) {
    // editar persona
    this._personaService.editarPersona(this.id, PERSONA).subscribe(data => {
      this.toastr.info('La persona fue actualizada con exito', 'Persona Actualizada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.personaForms.reset();
    })


  }else {
    // agregar persona
    console.log(PERSONA);
      this._personaService.guardarPersona(PERSONA).subscribe(data => {
      this.toastr.success('La persona fue registrada con exito', 'Persona Agregada');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.personaForms.reset();
    })
  }



  }

  editarPersona() {

    if(this.id !== null) {
      this.titulo = "EDITAR PERSONA";
      this._personaService.obtenerPersona(this.id).subscribe(data => {
        this.personaForms.setValue({
          nombre: data.nombre,
          correo: data.correo,
          telefono: data.telefono
        })
        console.log(data.nombre);

      })

    }

  }

}
