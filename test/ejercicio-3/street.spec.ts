import 'mocha';
import {expect} from 'chai';
import {Street} from '../../src/ejercicio-3/street';
import {Moto} from '../../src/ejercicio-3/moto';
import {Coche} from '../../src/ejercicio-3/coche';
import {Guagua} from '../../src/ejercicio-3/guagua';
import {Tren} from '../../src/ejercicio-3/tren';
import {Bicicleta} from '../../src/ejercicio-3/bicicleta';
import {Patinete} from '../../src/ejercicio-3/patinete';
import {Peaton} from '../../src/ejercicio-3/peaton';


describe('Test que accede a los atributos de la clase street', () => {
  it('Se accede a su calle, localizacion y los vecotres', () => {
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

    expect(calle_1.bicicletas.includes(bicicleta_1)).to.be.equal(true);
    expect(calle_1.patinetes.includes(patinete_1)).to.be.equal(true);
    expect(calle_1.peatones.includes(peaton_1)).to.be.equal(true);
    expect(calle_1.motos.includes(moto_1)).to.be.equal(true);
    expect(calle_1.coches.includes(coche_1)).to.be.equal(true);
    expect(calle_1.guaguas.includes(guagua_1)).to.be.equal(true);
    expect(calle_1.trenes.includes(tren_1)).to.be.equal(true);

    expect(calle_1.calle).to.be.equal('Calle Guajara');
    expect(calle_1.localizacion).to.be.equal('La Laguna');
  });
});
