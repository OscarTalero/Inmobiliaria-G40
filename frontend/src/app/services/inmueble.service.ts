import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inmueble } from '../models/inmueble';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
 url = 'http://localhost:4000/inmueble/';


  constructor(private http: HttpClient) { }

  getInmuebles(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarInmueble(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarInmueble(inmueble: Inmueble): Observable<any> {
    return this.http.post(this.url, inmueble);
  }

  obtenerInmueble(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarInmueble(id: string, inmueble: Inmueble): Observable<any> {
    return this.http.put(this.url + id, inmueble);
  }
}
