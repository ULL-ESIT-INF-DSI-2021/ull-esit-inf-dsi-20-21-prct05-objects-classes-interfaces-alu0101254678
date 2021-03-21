import {Movable} from '../ejercicio-3/movable';
/**
 * La clase bicicleta es una de las clases  que implementan
 * la interfaz, esta explicacione s valida para las otras clases
 */
export class Bicicleta implements Movable {
  nombre: string;
  velocidad: number;
  constructor(nombre: string, velocidad: number) {
    this.nombre = nombre;
    this.velocidad = velocidad;
  }
  /**
   * metodo get de la velocidad
   * @returns la velocidad
   */
  get_velocidad() {
    return this.velocidad;
  }
  /**
   * metodo para obtener el nombre de la bicicleta
   * @returns el nombre
   */
  get_nombre() {
    return this.nombre;
  }
}
