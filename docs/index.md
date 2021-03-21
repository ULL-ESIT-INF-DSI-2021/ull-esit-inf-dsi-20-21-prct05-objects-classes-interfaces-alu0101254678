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
Los gestores bibliográficos se usan para almacenar, consultar, buscar y exportar artículos de investigación.También permiten
filtrar el contenido en base a unos valores especificados por el usuario.

Entonces, lo que deberemos hacer será un conjunto de clase, objetos o interfaces que represente esta premisa.

Lo primero que haremos será crear la clase *articulo_investigación*, que gestione un único artículo de investigación:

```TypeScript
/**
 * Clase articulo investigacion, unicamente guarda la información para un
 * articulo de investigacion
 */
export class Articulo_Investigacion {
  titulo: string;
  autor_autores: string;
  email_emails: string;
  keyworks: Array<string>;
  resumen: string;
  fecha: number;
  editorial: string;
  numero_citas: number;

  constructor(titulo: string, autor_autores: string, email_emails: string, keywords: Array<string>, resumen: string, fecha:number, editorial:string, numero_citas:number) {
    this.titulo = titulo;
    this.autor_autores = autor_autores;
    this.email_emails = email_emails;
    this.keyworks = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.numero_citas = numero_citas;
  }
  /**
   * Este metodo de la clase, escribe por consola dicho articulo, en formato
   * APA, tiene más atributos, no es exactamente así, pero como no usamos más atributos
   */
  formato_APA() {
    console.log(`${this.autor_autores} ${this.fecha} ${this.titulo}`);
  }
}
```

Esta clase tiene como atributos los indicados en la porción de código, el título, el autor o autores, el email, las palabras clave,
representadas como un vector de cadenas de caracteres, el resumen, la fecha, como valor numérico, la editorial, y el número de citas.

También tenemos un método que imprime un artículo de investigación en [formato APA](https://biblioguias.uam.es/citar/estilo_apa).

Ahora nos encontramos con la clase gestor bibliografico, cuya función es gestionar un conjunto de articulos de investigación:

```TypeScript
print_informacion() {
    console.table(this.vector_bibliografico);
  }
  
  formato_APA_articulos() {
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      this.vector_bibliografico[indice].formato_APA();
    }
  }
```

Estos dos métodos imprimen la información contenida en el vector de artículos de investigación, sin embargo, el primero de ellos
muestra la información en formato tabla, y el segundo en formato APA.

Posteriormente, nos gustaría que se pudiera buscar uno o más artículos bibliográfico según sus palabras clave, esto se realiza con dos
métodos, uno de ellos imprime el vector como una tabla, y el segundo en formato APA pero ambos realizan la misma función, 
buscar las coincidencias en las palabras clave, dentro del vector:

```TypeScript
  busqueda_palabra_clave_formato_tabla(keywords: Array<string>) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < keywords.length; indice ++) {
      for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
        for (let indice = 0; indice < this.vector_bibliografico[indice].keyworks.length; indice ++) {
          if (keywords[indice] === this.vector_bibliografico[indice].keyworks[indice]) {
            vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
          }
        }
      }
    }
    console.table(vector_bibliografico_auxiliar);
  }
  
    busqueda_palabra_clave_formato_apa(keywords: Array<string>) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < keywords.length; indice ++) {
      for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
        for (let indice = 0; indice < this.vector_bibliografico[indice].keyworks.length; indice ++) {
          if (keywords[indice] === this.vector_bibliografico[indice].keyworks[indice]) {
            vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
          }
        }
      }
    }

    for (let indice = 0; indice < vector_bibliografico_auxiliar.length; indice ++) {
      vector_bibliografico_auxiliar[indice].formato_APA();
    }
  }
```
Vemos como se manipulan varios vectores, el vector que se recibe como parámetro, de strings, un vector auxilixar,
que se usa para almacenar los valores coincidentes, y además hemos de recorrer, primero, el vector de *keywords*, luego el
tamaño del vector, y luego para cada vector, el tamaño de cada vector de palabras clave.

Por último, tenemos tres métodos que filtran por el campo de fecha, por la editorial, y por el autor o autores:

```TypeScript
  filtrar_fecha(fecha: number) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (fecha === this.vector_bibliografico[indice].fecha) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
  
    filtrar_editorial(editorial: string) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (editorial === this.vector_bibliografico[indice].editorial) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
  
   filtrar_nombre(nombre: string) {
    let vector_bibliografico_auxiliar: Array<Articulo_Investigacion> = [];
    for (let indice = 0; indice < this.vector_bibliografico.length; indice ++) {
      if (nombre === this.vector_bibliografico[indice].autor_autores) {
        vector_bibliografico_auxiliar.push(this.vector_bibliografico[indice]);
      }
    }
    return vector_bibliografico_auxiliar;
  }
```

Observamos como en los tres métodos, se recibe el correspondiente parámetro y también se usa un vector auxiliar
el cual res retorna.

## __Medios de transporte__
En este ejercicio, hemos de construir un conjunto de clases, objetos e interfaces, que representen a los diferentes
medios de transporte que circularán en una calle, entre estos vehículos encontramos coches, motos, trenes, guaguas, 
patinetes, bicicletas, e incluso, podríamos considerar el peatón.

Lo primero que deberemos crear una interfaz llamada *movable*, que incluya las propiedades y métodos necesarios para 
implementar cualquier clase que represente a un objeto que pueda moverse:

```TypeScript
export interface Movable {
  readonly velocidad: number;
  nombre: string;

  get_velocidad(): number;
  get_nombre(): string;
}
```
Hemos decidido que las propiedades que tendrá cada vehículo sean la velocidad, y el nombre, y los métodos serán dos, uno
para obtener el valor de la velocidad, y otro para obtener el valor del nombre.

Ahora vamos a ver una porción del código para uno de los vehículos, por ejemplo, el coche:

```TypeScript
import {Movable} from '../ejercicio-3/movable';
/**
 * El coche suele ser el segundo
 */
export class Coche implements Movable {
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
```
Vemos como tiene que implementar esos atributos y esos métodos, simplemente estas clases gestionan la velocidad para una única
clase de vehículo en este caso, un coche, así como un nombre.

Nuevamente pasamos a observar a la clase *street*, que aúna todas las clases anteriores, tenemos que importarlas, a este fichero
que contiene la clase anteriormente mencionada.

```TypeScript
import {Moto} from './moto';
import {Coche} from './coche';
import {Guagua} from './guagua';
import {Tren} from './tren';
import {Bicicleta} from './bicicleta';
import {Patinete} from './patinete';
import {Peaton} from './peaton';
/**
 * Esta es la clase street, y representa a todos los vehiculos que circulan en una calle
 */
export class Street {
  calle: string;
  localizacion: string;
  motos: Array<Moto>;
  coches: Array<Coche>;
  guaguas: Array<Guagua>;
  trenes: Array<Tren>;
  bicicletas: Array<Bicicleta>;
  patinetes: Array<Patinete>;
  peatones: Array<Peaton>;

  constructor(calle: string, localizacion: string, motos: Array<Moto>, coches: Array<Coche>, guaguas: Array<Guagua>,
      trenes: Array<Tren>, bicicletas: Array<Bicicleta>,
      patinetes: Array<Patinete>,
      peatones: Array<Peaton>) {
    this.calle = calle;
    this.localizacion = localizacion;
    this.motos = motos;
    this.coches = coches;
    this.guaguas = guaguas;
    this.trenes = trenes;
    this.bicicletas = bicicletas;
    this.patinetes = patinetes;
    this.peatones = peatones;
  }
```
Como vemos, la clase *street* posee dos atributos que son la calle y su localización, y un array por cada vehículo que puede
circular por esa misma calle.

El próximo método indica cuántos vehículos circulan por la calle:

```TypeScript
  mostrar_vehiculos() {
    console.log(`Vehiculos en la calle ${this.calle}, localizacion ${this.localizacion}:`);
    console.table(this.motos);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.motos.length} motos.`);
    console.table(this.coches);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.coches.length} coches.`);
    console.table(this.guaguas);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.guaguas.length} guaguas.`);
    console.table(this.trenes);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.trenes.length} trenes.`);
    console.table(this.bicicletas);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.bicicletas.length} bicicletas.`);
    console.table(this.patinetes);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.patinetes.length} patinetes.`);
    console.table(this.peatones);
    console.log(`En la calle ${this.calle}, localizacion ${this.localizacion} circulan ${this.peatones.length} peatones.`);
  }
```
La información se presenta en formato de tabla, simplemente con acceder al tamaño de los vectores se obtienen los valores correspondientes.

El siguiente método de la clase *street* permite añadir un vehículo, sea de la clase que sea:

```TypeScript
  añadir_vehiculo(vehiculo: Moto | Coche | Guagua | Tren | Bicicleta | Patinete | Peaton) {
    if (vehiculo instanceof Moto) {
      this.motos.push(vehiculo);
    }
    if (vehiculo instanceof Coche) {
      this.coches.push(vehiculo);
    }
    if (vehiculo instanceof Guagua) {
      this.guaguas.push(vehiculo);
    }
    if (vehiculo instanceof Tren) {
      this.trenes.push(vehiculo);
    }
    if (vehiculo instanceof Bicicleta) {
      this.bicicletas.push(vehiculo);
    }
    if (vehiculo instanceof Patinete) {
      this.patinetes.push(vehiculo);
    }
    if (vehiculo instanceof Peaton) {
      this.peatones.push(vehiculo);
    }
  }
```
*instance of* comprueba si un objeto pertenece a una clase determinada, en este caso, tenemos que comprobar si el vehículo
que recibimos pertenece o no, a cualquierea de las clases descritas, y posteriormente, lo añadimos a su vector perteneciente.

El siguiente método elimina, un elemento de la calle, es decir, un vehículo que estaba circulando por una calle:

```TypeScript
  quitar_vehiculo(vehiculo: Moto | Coche | Guagua | Tren | Bicicleta | Patinete | Peaton ) {
    if (vehiculo instanceof Moto) {
      this.motos.splice(this.motos.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Coche) {
      this.coches.splice(this.coches.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Guagua) {
      this.guaguas.splice(this.guaguas.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Tren) {
      this.trenes.splice(this.trenes.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Bicicleta) {
      this.bicicletas.splice(this.bicicletas.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Patinete) {
      this.patinetes.splice(this.patinetes.indexOf(vehiculo), 1);
    }
    if (vehiculo instanceof Peaton) {
      this.peatones.splice(this.peatones.indexOf(vehiculo), 1);
    }
  }
```

Tenemos el caso anterior, no sabemos de antemano quñe vamos a elimina, por lo tanto el objeto puede ser un coche, una moto, un tren,
luego, con el método *splice* incluido en *vector* eliminamos un único elemento, ya que se lo estamos indicando con el segundo parámetro pasado a la función,
y el elemento en cuestión se accede *index*, y el *objeto*.

Por útlimo, tenemos un método que ordena los valores de los vectores de vehículos según el campo de la velocidad;

```TypeScript
  ordenar_vehiculos() {
    this.motos.sort((a: Moto, b: Moto) => a.get_velocidad() - b.get_velocidad());
    this.coches.sort((a: Coche, b: Coche) => a.get_velocidad() - b.get_velocidad());
    this.guaguas.sort((a: Guagua, b: Guagua) => a.get_velocidad() - b.get_velocidad());
    this.trenes.sort((a: Tren, b: Tren) => a.get_velocidad() - b.get_velocidad());
    this.bicicletas.sort((a: Bicicleta, b: Bicicleta) => a.get_velocidad() - b.get_velocidad());
    this.patinetes.sort((a: Patinete, b: Patinete) => a.get_velocidad() - b.get_velocidad());
    this.peatones.sort((a: Peaton, b: Peaton) => a.get_velocidad() - b.get_velocidad());

    this.mostrar_vehiculos();
  }
```

En la clase *vector* también encontramos un método que ordena según un parámetro de ordenación.

## __Ejercicio de clase 1__
En este ejercicio propuesto por el profesorado, tenemos una clase que representa a una persona, tiene los 
siguientes atributos privados:

* nombre: string
* apellido: string
* fecha_nacimiento: number
* genero: string

Queremos acceder a estos atributos, sin embargo como son privados, tenemos que buscar otra forma, como construir un método
que permita obtener su valor, y otro método que permita modificar el mismo.

```TypeScript
export class Persona {
  private nombre: string;
  private apellido: string;
  private fecha_nacimiento: number;
  private genero: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.genero = genero;
  }

  get_nombre() {
    return this.nombre;
  }

  get_apellido() {
    return this.apellido;
  }

  get_fecha_nacimiento() {
    return this.fecha_nacimiento;
  }

  get_genero() {
    return this.genero;
  }

  set_nombre(nombre: string) {
    this.nombre = nombre;
    return this.nombre;
  }

  set_apellido(apellido: string) {
    this.apellido = apellido;
    return this.apellido;
  }

  set_fecha_nacimiento(fecha_nacimiento: number) {
    this.fecha_nacimiento = fecha_nacimiento;
    return this.fecha_nacimiento;
  }

  set_genero(genero: string) {
    this.genero = genero;
    return this.genero;
  }
}

```
Con los métodos *get* y *set* damos respuesta al problema de los atributos.

Esta clase se utilizará posteriormente.

## __Ejercicio de clase 2__
En este ejercicio debemos representar a una clase Estudiante, que será una de las clases hijas de la clase Persona, 
tendrá los mismos atributos y el mismo comportamiento, sin embargo, nosotros le añadimos un atributo que representa
al correo institucional.

```TypeScript
import {Persona} from '../ejercicio-clase-1/ejercicio-clase-1';
/**
 * La clase estudiante extiende a la clase persona, asimismo esta añade un atributo
 * adicional que es correo electronico
 */
export class Estudiante extends Persona {
  private correo_electronico: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string, correo_electronico: string) {
    super(nombre, apellido, fecha_nacimiento, genero);
    this.correo_electronico = correo_electronico;
  }

  get_correo_electronico() {
    return this.correo_electronico;
  }

  set_correo_electronico(correo_electronico: string) {
    this.correo_electronico = correo_electronico;
    return this.correo_electronico;
  }
}
```
Importamos la clase persona, y marcamos a la clase como *extends*, de la clase Persona, para que sepa, que
queremos heredar de ella y luego con el método *super*, accedemos al cosntructor de la clase padre.

No necesitamos implementar los métodos anteriores, solamente aquel que manipula el atributo, *correo electrónico*.

## __Ejercicio de clase 3__
Este ejercicio es muy parecido al anterior, solo que ahora trabajamos con profesores y no con estudiantes, y también añadimos
el atributo *correo electronico*, a continuación mostramos el código:

```TypeScript
import {Persona} from '../ejercicio-clase-1/ejercicio-clase-1';
/**
 * La clase profesor extiende a la clase persona, sin embargo como sucede con la clase
 * estudiante, se añade un nuevo atributo que es el correo electronico
 */
export class Profesor extends Persona {
  private correo_electronico: string;

  constructor(nombre: string, apellido: string, fecha_nacimiento: number, genero: string, correo_electronico: string) {
    super(nombre, apellido, fecha_nacimiento, genero);
    this.correo_electronico = correo_electronico;
  }

  get_correo_electronico() {
    return this.correo_electronico;
  }

  set_correo_electronico(correo_electronico: string) {
    this.correo_electronico = correo_electronico;
    return this.correo_electronico;
  }
}
```
No lo hemos mencionado anteriormente, pero el correo electronico, también es un atributo privado, por lo tanto, es necesario para
acceder al mismo, declarar la función *get*, y para modificarlo, la función *set*.

## __Ejercicio de clase 4__

En este último ejercicio propuesto en la clase de prácticas lo que deberemos hacer es crear una clase asignatura, que hace 
que un conjunto de profesores y alumnos impartan o estudien una asignatura, respectivamente.

Entonces, esta nueva clase, tendrá como atributos un vector de profesores, un vector de estudiantes, y una cadena de caracteres
que representa a la propia asignatura.

```
export class Asignatura {
  vector_estudiantes: Array<Estudiante>;
  vector_profesores: Array<Profesor>;
  asignatura: string;

  constructor(vector_estudiantes: Array<Estudiante>, vector_profesores: Array<Profesor>, asignatura: string) {
    this.vector_estudiantes = vector_estudiantes;
    this.vector_profesores = vector_profesores;
    this.asignatura = asignatura;
  }
```

Asimismo, también dispondrá de un método que se encargará de imprimir los valores del vector de estudiantes, esto es, 
los estudiantes que cursan una determinada asignatura:

```TypeScript
  print_estudiantes() {
    console.log(`La asignatura ${this.asignatura} es estudiada por los alumnos:`);
    console.table(this.vector_estudiantes);
    /* for (let indice = 0; indice < this.vector_estudiantes.length; indice ++) {
      console.log(this.vector_estudiantes[indice].get_nombre());
    }*/
  }
```

Y lo mismo sucede con los profesores:

```TypeScript
  print_profesores() {
    console.log(`La asignatura ${this.asignatura} es impartida por los profesores:`);
    console.table(this.vector_profesores);
    /* for (let indice = 0; indice < this.vector_profesores.length; indice ++) {
      console.log(this.vector_profesores[indice].get_nombre());
    }*/
  }
```
Como observamos en los dos métodos, optamos por imprimir los valores e una tabla, pero también podríamos haberlo
realizado con *console.log()*.

## __Anexo 1: Comentarios con *typedoc*__
En esta práctica se ha hecho uso de typedoc, para el desarrollo de los comentarios de esta práctica, la configuración e instalación
del mismo se puede encontrar en el [informe](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101254678/blob/master/docs/index.md) de la práctica 4.

Únicamente comentamos como queda la previsualización de *index.html* y *modules.html*:





