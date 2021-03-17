import {Persona} from '../ejercicio-clase-1/ejercicio-clase-1';

export class Estudiante extends Persona {
  private correo_electronico: string;
  private asignatura: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string, correo_electronico: string, asignatura: string) {
    super(nombre, apellido, fecha_nacimiento, genero);
    this.correo_electronico = correo_electronico;
    this.asignatura;
  }
}
