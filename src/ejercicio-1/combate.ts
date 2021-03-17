import {Pokemon} from "./pokemon"

export class Combat {
  pokemon_1: Pokemon;
  pokemon_2: Pokemon;

  constructor(pokemon_1: Pokemon, pokemon_2: Pokemon) {
    this.pokemon_1 = pokemon_1;
    this.pokemon_2 = pokemon_2;
  }

  // tipo del pokemon 1, tipo del pokemon 1, ataque del pokemon 1, defensa del pokemon 2
  // efective_Pokemon(mi_tipo: string, tipo_oponente: string, mi_ataque: number, defensa_oponente: number) {

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
    } while (this.efective_pokemon_1_to_pokemon_2() < this.pokemon_2.vida || this.efective_pokemon_2_to_pokemon_1() < this.pokemon_1.vida);
  }
}

