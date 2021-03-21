import {Pokemon} from "./pokemon"

/**
 * Clase que representa a una pokédex, esta alamcena un vector
 * que contiene un conjunto de Pokémon, y tiene un método que
 * recorre el vecor mostrando los Pokémon
 */
export class Pokedex {
  vector_Pokemon: Array<Pokemon>;

  constructor(vector_Pokemon: Array<Pokemon>) {
    this.vector_Pokemon = vector_Pokemon;
  }

  /**
   * Este es el unico método que tiene la clase
   */
  mostrar_Pokemon() {
    for (let indice = 0; indice < this.vector_Pokemon.length; indice ++) {
      console.table(this.vector_Pokemon[indice]);
    }
  }
}

let pikachu: Pokemon = new Pokemon("pikachu", 10, 1, "electrico", 100, 50, 150, 30);
let arceus: Pokemon = new Pokemon("arceus", 100, 50, "normal", 200, 100, 90, 290);
let coleccion: Pokedex = new Pokedex([pikachu, arceus]);

coleccion.mostrar_Pokemon();
