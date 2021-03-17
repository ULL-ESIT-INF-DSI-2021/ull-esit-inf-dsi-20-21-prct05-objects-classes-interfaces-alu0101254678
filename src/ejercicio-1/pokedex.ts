import {Pokemon} from "./pokemon"

export class Pokedex {
  vector_Pokemon: Array<Pokemon>;

  constructor(vector_Pokemon: Array<Pokemon>) {
    this.vector_Pokemon = vector_Pokemon;
  }

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
