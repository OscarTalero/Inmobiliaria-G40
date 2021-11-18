export class Persona {
  _id?: number;
  nombre: string;
  correo: string;
  telefono: string;

  constructor(nombre: string,correo: string,telefono: string){
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
  }
}

