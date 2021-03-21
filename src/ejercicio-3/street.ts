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
  /**
   * Este método dice cuantos vehiculos circulan por la calle
   */
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
  /**
   * Este método permite añadir un vehículo, pero no sabemos cual, de antemano
   * por eso el tipo del parámetro puede tomar distintas clases
   * @param vehiculo es el vehículo de la clase moto, coche...
   */
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
  /**
   * Este método quita un vehículo de alguno de los vectores que contiene una lista
   * de vehículos de una clase determinada.
   * @param vehiculo es el vehiculo que se quiere eliminar, puede que no este en el vector
   */
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
  /**
   * Este es el método de ordenación de los vehículos, en este caso, los ordenamos
   * por el atributo de la velocidad
   */
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
}

let moto_1: Moto = new Moto('moto 1', 100);
let moto_2: Moto = new Moto('moto 2', 90);

let coche_1: Coche = new Coche('coche 1', 80);
let coche_2: Coche = new Coche('coche 2', 85);

let guagua_1: Guagua = new Guagua('guagua 1', 75);
let guagua_2: Guagua = new Guagua('guagua 2', 80);

let tren_1: Tren = new Tren('tren 1', 50);

let bicicleta_1: Bicicleta = new Bicicleta('bicicleta 1', 30);
let bicicleta_2: Bicicleta = new Bicicleta('bicicleta 2', 35);

let patinete_1: Patinete = new Patinete('patinete 1', 20);
let patinete_2: Patinete = new Patinete('patinete 2', 25);

let peaton_1: Peaton = new Peaton('peaton 1', 5);
let peaton_2: Peaton = new Peaton('peaton 2', 5);

let calle_1: Street = new Street('Calle Guajara', 'La Laguna', [moto_1, moto_2], [coche_1, coche_2], [guagua_1, guagua_2], [tren_1], [bicicleta_1, bicicleta_2], [patinete_1, patinete_2], [peaton_1, peaton_2]);

calle_1.mostrar_vehiculos();
console.log(`*************************************************************************************************************`);
// calle_1.quitar_vehiculo(moto_1);
// calle_1.mostrar_vehiculos();
calle_1.ordenar_vehiculos();
