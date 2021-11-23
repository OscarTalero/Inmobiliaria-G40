import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inmueble } from 'src/app/models/inmueble';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent implements OnInit {

  listInmuebles: Inmueble[] = [];

  constructor(private _inmuebleService: InmuebleService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerInmuebles();
  }

  obtenerInmuebles() {
    this._inmuebleService.getInmuebles().subscribe(data => {
      this.listInmuebles = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarInmueble(id: any){
    this._inmuebleService.eliminarInmueble(id).subscribe(data => {
      this.toastr.error('El inmueble fue eliminada correctamente', 'Inmueble Eliminada');
      this.obtenerInmuebles();
    }, error => {
      console.log(error);
    })
  }
}
