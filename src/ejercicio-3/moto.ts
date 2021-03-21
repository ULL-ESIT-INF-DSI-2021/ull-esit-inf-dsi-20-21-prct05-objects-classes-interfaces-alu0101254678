import {Movable} from '../ejercicio-3/movable';
/**
 * La moto es el vehiculo mas rapido
 */
export class Moto implements Movable {
  nombre: string;
  velocidad: number;
  constructor(nombre: string, velocidad: number) {
    this.nombre = nombre;
    this.velocidad = velocidad;
  }

  get_velocidad() {
    return this.velocidad;
  }

  get_nombre() {
    return this.nombre;
  }
}
