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

  get_nombre() {
    return this.nombre;
  }

  get_apellido() {
    return this.apellido;
  }

  get_fecha_nacimiento() {
    return this.fecha_nacimiento;
  }

  get_genero() {
    return this.genero;
  }

  set_nombre(nombre: string) {
    this.nombre = nombre;
    return this.nombre;
  }

  set_apellido(apellido: string) {
    this.apellido = apellido;
    return this.apellido;
  }

  set_fecha_nacimiento(fecha_nacimiento: number) {
    this.fecha_nacimiento = fecha_nacimiento;
    return this.fecha_nacimiento;
  }

  set_genero(genero: string) {
    this.genero = genero;
    return this.genero;
  }
}
