export class Ubicacion {
  _id?: number;
  departamento: string;
  ciudad: number;
  zona: string;
  estrato: string;

  constructor(departamento: string, ciudad: number, zona: string, estrato: string){
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.zona = zona;
    this.estrato = estrato;
  }
}
