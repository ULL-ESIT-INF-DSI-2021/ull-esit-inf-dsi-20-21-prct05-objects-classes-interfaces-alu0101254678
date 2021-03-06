/**
 * Clase que almacena un pokemon, sus atributos son
 * el nombre, el peso la altura, el tipo, el ataque,
 * la defensa, la velocidad y la vida
 */
export class Pokemon {
  nombre: string;
  peso: number;
  altura: number;
  tipo: string;
  ataque: number;
  defensa: number;
  velocidad: number;
  vida: number;

  constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, vida: number) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.vida = vida;
  }
}
