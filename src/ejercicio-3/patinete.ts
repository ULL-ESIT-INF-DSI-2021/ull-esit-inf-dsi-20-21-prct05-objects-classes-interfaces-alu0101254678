import {Movable} from '../ejercicio-3/movable';
/**
 * Todas estas clases implementan a la misma
 * interfaz, son por asi decirlo sus hijas
 */
export class Patinete implements Movable {
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
