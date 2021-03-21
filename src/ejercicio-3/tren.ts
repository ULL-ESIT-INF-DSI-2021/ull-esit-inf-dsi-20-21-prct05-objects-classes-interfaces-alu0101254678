import {Movable} from '../ejercicio-3/movable';
/**
 * En estas clases tenemos dos metodos para obtener
 * la velocidad y el nombre
 */
export class Tren implements Movable {
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
