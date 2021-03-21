import {Pokemon} from "./pokemon"
/**
 * Clase combate, que simula un combate entre dos pokemon
 * tiene como atributos dos pokemon, de la clase pokemon, y dos metodos
 */
export class Combat {
  pokemon_1: Pokemon;
  pokemon_2: Pokemon;

  constructor(pokemon_1: Pokemon, pokemon_2: Pokemon) {
    this.pokemon_1 = pokemon_1;
    this.pokemon_2 = pokemon_2;
  }

  /**
   * Método de la clase que calcula el daño del pokemon 1 al pokemon 2
   * @returns El daño del pokemon 1 al pokemon 2
   */

  efective_pokemon_1_to_pokemon_2(): number {
    const super_efectivo: number = 50 * (this.pokemon_1.ataque / this.pokemon_2.defensa) * 2;
    const normal: number = 50 * (this.pokemon_1.ataque / this.pokemon_2.defensa);
    const poco_efectivo: number = 50 * (this.pokemon_1.ataque / this.pokemon_2.defensa) * 0.5;


    if (this.pokemon_1.tipo === 'fuego') {
      if (this.pokemon_2.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'hierba') {
        return super_efectivo;
      }
      if (this.pokemon_2.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'electrico') {
        return normal;
      }
    }

    if (this.pokemon_1.tipo === 'agua') {
      if (this.pokemon_2.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'fuego') {
        return super_efectivo;
      }
      if (this.pokemon_2.tipo=== 'hierba') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.pokemon_1.tipo === 'hierba') {
      if (this.pokemon_2.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo=== 'fuego') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.pokemon_2.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.pokemon_1.tipo === 'electrico') {
      if (this.pokemon_2.tipo === 'electrico') {
        return poco_efectivo;
      }
      if (this.pokemon_2.tipo === 'fuego') {
        return normal;
      }
      if (this.pokemon_2.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.pokemon_2.tipo === 'hierba') {
        return normal;
      }
    } 
    return 0;
  }

  /**
   * Método que calcula el daño que le hace el pokemon 2 al pokemon 1
   * @returns el daño que le ha hecho el pokemon 2 al pokemon 1
   */
  efective_pokemon_2_to_pokemon_1(): number {
    const super_efectivo: number = 50 * (this.pokemon_2.ataque / this.pokemon_1.defensa) * 2;
    const normal: number = 50 * (this.pokemon_2.ataque / this.pokemon_1.defensa);
    const poco_efectivo: number = 50 * (this.pokemon_2.ataque / this.pokemon_1.defensa) * 0.5;


    if (this.pokemon_2.tipo === 'fuego') {
      if (this.pokemon_1.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'hierba') {
        return super_efectivo;
      }
      if (this.pokemon_1.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'electrico') {
        return normal;
      }
    }

    if (this.pokemon_2.tipo === 'agua') {
      if (this.pokemon_1.tipo === 'agua') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'fuego') {
        return super_efectivo;
      }
      if (this.pokemon_1.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.pokemon_2.tipo === 'hierba') {
      if (this.pokemon_1.tipo === 'hierba') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'fuego') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.pokemon_1.tipo === 'electrico') {
        return normal;
      }
    }
    if (this.pokemon_2.tipo === 'electrico') {
      if (this.pokemon_1.tipo === 'electrico') {
        return poco_efectivo;
      }
      if (this.pokemon_1.tipo === 'fuego') {
        return normal;
      }
      if (this.pokemon_1.tipo === 'agua') {
        return super_efectivo;
      }
      if (this.pokemon_1.tipo === 'hierba') {
        return normal;
      }
    }
    return 0;
  }
  /**
   * Método de la clase que inicia el combate de dos pokemon,
   * el procedimiento finaliza cuando a alguno de los dos pokemon le queda
   * vida = 0, o menor que cero
   * @returns 
   */
  start() {
    do {
      console.log(`${this.pokemon_1.nombre} ${this.pokemon_1.tipo} ${this.pokemon_1.ataque} ${this.pokemon_1.defensa} ${this.pokemon_1.velocidad} ${this.pokemon_1.vida}`);
      console.log(`${this.pokemon_2.nombre} ${this.pokemon_2.tipo} ${this.pokemon_2.ataque} ${this.pokemon_2.defensa} ${this.pokemon_2.velocidad} ${this.pokemon_2.vida}`);

      let dano_a_pokemon_2: number = this.efective_pokemon_1_to_pokemon_2();
      console.log(`dano de pokemon 1 a pokemon 2: ${dano_a_pokemon_2}`);
      let dano_a_pokemon_1: number = this.efective_pokemon_2_to_pokemon_1();
      console.log(`dano de pokemon 2 a pokemon 1: ${dano_a_pokemon_1}`);

      this.pokemon_2.vida -= dano_a_pokemon_2;
      console.log(`vida de pokemon 2: ${this.pokemon_2.vida}`);
      this.pokemon_1.vida -= dano_a_pokemon_1;
      console.log(`vida de pokemon 1: ${this.pokemon_1.vida}`);
      if (this.pokemon_1.vida <= 0) {
        return;
      }
      if (this.pokemon_2.vida <= 0) {
        return;
      }
    } while (this.efective_pokemon_1_to_pokemon_2() >= this.pokemon_2.vida || this.efective_pokemon_2_to_pokemon_1() >= this.pokemon_1.vida);
  }
}

let pikachu: Pokemon = new Pokemon("pikachu", 10, 1, "electrico", 100, 50, 150, 30);
let blastoise: Pokemon = new Pokemon("blastoise", 100, 50, "agua", 200, 100, 90, 290);
let comate_1: Combat = new Combat(pikachu, blastoise);
comate_1.start();
