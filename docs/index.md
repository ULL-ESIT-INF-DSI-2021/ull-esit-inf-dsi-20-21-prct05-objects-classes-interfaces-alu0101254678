# Desarrollo de Sistemas Informáticos
## Práctica 5 - Objetos, Clases e Interfaces
## Yago Pérez Molanes (alu0101254678@ull.edu.es)
__*Contenidos del informe*__

__*Pasos realizados para el desarrollo de la práctica*__

* Algunas tareas a realizar previamente: 
  * Aceptar la tarea asignada a [GitHub Classroom](https://classroom.github.com/assignment-invitations/1c23ab34d87288a70dfe7ad425e8ca75/status)

## __Introducción y Objetivos__
En esta práctica trataremos de resolver una serie de ejercicios relacionados con conceptos que están presentes en casi 
cualquier lenguaje de programación moderno, esto conceptos, son las clases las interfaces y los objetos.

Cabe destacar que el primer ejercicio está relacionado directamente con la [práctica](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101254678) anterior.

Comentaremos la resolución de los ejercicios propuestos, así como los que el profesorado añadió en clase de prácticas.

## __Ejercicio 1: Pokédex__
Este es el ejercicio que comentábamos aneteriormente, tenemos que crear la estructura de clases e interfaces necesarias para representar
a una pokédex.

El primer paso es crear una clase que represente a un pokémon individual, con sus características como son el nombre, el peso, la 
altura, su tipo, así como estadísticas como el ataque, defensa...

En el siguiente código observamos la clase pokémon.

```TypeScript
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
```
Observamos los atributos anteriormente descritos, luego también quizás no es necesario comentarlo, pero también disponemos de los
comentarios que vamos añadiendo al principio de la clase, el constructor simplemente iguala esos valores.

El siguiente paso es crear la clase Pokédex, lo que hará esta, será almacenar un conjunto de pokémon, es decir, que el tipo de 
dato adecuado sería un vector de pokémon.

```TypeScript
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
```
Vemos como tenemos que importar la clase pokémon, que se encuentra en el mismo directorio,y la creación de la clase, como dato
destacamos un método que lo que hace es imprimir por consola, en forma de tabla el estado de la pokédex.

Y ahora pasamos a la clase más importante, la clase Combat, está simulará un combate entre dos Pokémon, y aquí es donde
debemos añadir la función descrita en la anterior práctica, concretamente el ejercicio 9.

```TypeScript
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

```
Esta clase recibe dos Pokémon, que son los que combatirán entre ellos, luego para calcular el daño que le hace un Pokémon
a otro Pokémon podemos acudir a este [método de la práctica anterior](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101254678/blob/master/src/ejercicio-9.ts), aunque para esta práctica se ha redefinido, 
pero el comportamiento es el mismo.

Posteriormente, tenemos el método más importante, *start*, mediante el cual dos pokémon comienzan a combatir, es decir, que sus vidas se van
reduciendo conforme al daño que devuelve la función anterior, que recordamos depende de los tipos de los pokémon, así como de el ataque del 
pokémon ofensivo y la defensa del pokémon oponente.

```TypeScript
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
    } while (this.efective_pokemon_1_to_pokemon_2() <= this.pokemon_2.vida || this.efective_pokemon_2_to_pokemon_1() <= this.pokemon_1.vida);
  }
```
Lo que ocurre es que la función, el método, va informando del estado de los pokémon, del daño que van causando, así como de la vida que 
les queda, por lo tanto, el combate continuará hasta que la vida de alguno de los dos se reduzca a 0, o alguno de los ataques de los mismos
sea menor que su vida.

## __Ejercicio 2: Gestor Bibliográfico__




