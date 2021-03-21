import 'mocha';
import {expect} from 'chai';
import {Coche} from '../../src/ejercicio-3/coche';

describe('Test que accede a los atributos de la clase coche', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let coche_1: Coche = new Coche('coche_1', 90);

    expect(coche_1.get_nombre()).to.be.equal('coche_1');
    expect(coche_1.get_velocidad()).to.be.equal(90);
  });
});
