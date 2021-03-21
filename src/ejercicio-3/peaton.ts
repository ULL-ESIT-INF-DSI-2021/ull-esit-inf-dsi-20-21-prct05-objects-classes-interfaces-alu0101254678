import {Movable} from '../ejercicio-3/movable';
/**
 * El peaton suele tener la velocidad mas lenta, 
 * en un principio íbamos a tener una velocidad constante
 * para todos los vehiculos de una misma clase, es decir
 * un valor fijo, sin embargo se optó por darle un valor que
 * se espefecificara
 */
export class Peaton implements Movable {
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
