import 'mocha';
import {expect} from 'chai';
import {Tren} from '../../src/ejercicio-3/tren';

describe('Test que accede a los atributos de la clase tren', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let tren_1: Tren = new Tren('tren_1', 50);

    expect(tren_1.get_nombre()).to.be.equal('tren_1');
    expect(tren_1.get_velocidad()).to.be.equal(50);
  });
});
