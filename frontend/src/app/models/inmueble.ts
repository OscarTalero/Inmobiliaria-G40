export class Inmueble {
  _id?: number;
  tipo: string;
  precio: number;
  descripcion: string;
  ubicacion: string;

  constructor(tipo: string, precio: number, descripcion: string,ubicacion: string){
    this.tipo = tipo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.ubicacion = ubicacion;
  }
}
