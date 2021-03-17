import {Persona} from '../ejercicio-clase-1/ejercicio-clase-1';

export class Estudiante extends Persona {
  private correo_electronico: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string, correo_electronico: string) {
    super(nombre, apellido, fecha_nacimiento, genero);
    this.correo_electronico = correo_electronico;
  }

  get_correo_electronico() {
    return this.correo_electronico;
  }

  set_correo_electronico(correo_electronico: string) {
    this.correo_electronico = correo_electronico;
    return this.correo_electronico;
  }
}
