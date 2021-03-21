/**
 * Interfaz que representa a algo que se mueve, tiene que tener estos
 * dos propiedades, la velocidad y el nombre y dos métodos para obtener
 * sus valores
 */
export interface Movable {
  readonly velocidad: number;
  nombre: string;

  get_velocidad(): number;
  get_nombre(): string;
}