export class Persona {
  private nombre: string;
  private apellido: string;
  private fecha_nacimiento: number;
  private genero: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.genero = genero;
  }

  
}
