import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  personaForms: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.personaForms = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]  // Validators.(longitud, tipo, etc)
    })
  }

  ngOnInit(): void {
  }

adicionarPersona() {
  console.log(this.personaForms)

  console.log(this.personaForms.get('nombre')?.value);

  const PERSONA: Persona = {
    nombre: this.personaForms.get('nombre')?.value,
    correo: this.personaForms.get('correo')?.value,
    telefono: this.personaForms.get('telefono')?.value,
  }

  console.log(PERSONA);
  this.toastr.success('La persona fue registrada con exito', 'Persona Agregada');
  this.router.navigate(['/'])
}

}
