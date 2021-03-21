import {Movable} from '../ejercicio-3/movable';
/**
 * Vemos como todos representan a la interfaz,
 */
export class Guagua implements Movable {
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
