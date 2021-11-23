import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inmueble } from 'src/app/models/inmueble';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {
  inmuebleForms: FormGroup;
  titulo = 'REGISTRAR INMUEBLE';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _inmuebleService: InmuebleService,
              private aRouter: ActivatedRoute) {
    this.inmuebleForms = this.fb.group({
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],  // Validators.(longitud, tipo, etc)
      ubicacion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarInmueble();
  }

adicionarInmueble() {
  console.log(this.inmuebleForms)

  console.log(this.inmuebleForms.get('tipo')?.value);

  const INMUEBLE: Inmueble = {
    tipo: this.inmuebleForms.get('tipo')?.value,
    precio: this.inmuebleForms.get('precio')?.value,
    descripcion: this.inmuebleForms.get('descripcion')?.value,
    ubicacion: this.inmuebleForms.get('ubicacion')?.value,
  }

  if(this.id !== null) {
    // editar inmueble
    this._inmuebleService.editarInmueble(this.id, INMUEBLE).subscribe(data => {
      this.toastr.info('EL inmueble fue actualizado con exito', 'Inmueble Actualizado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.inmuebleForms.reset();
    })


  }else {
    // agregar inmueble
    console.log(INMUEBLE);
      this._inmuebleService.guardarInmueble(INMUEBLE).subscribe(data => {
      this.toastr.success('El inmueble fue registrado con exito', 'Inmueble Agregado');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.inmuebleForms.reset();
    })
  }
  }

  editarInmueble() {

    if(this.id !== null) {
      this.titulo = "EDITAR INMUEBLE";
      this._inmuebleService.obtenerInmueble(this.id).subscribe(data => {
        this.inmuebleForms.setValue({
          tipo: data.tipo,
          precio: data.precio,
          descripcion: data.descripcion,
          ubicacion: data.ubicacion,
        })
        console.log(data.nombre);

      })

    }

  }

}
