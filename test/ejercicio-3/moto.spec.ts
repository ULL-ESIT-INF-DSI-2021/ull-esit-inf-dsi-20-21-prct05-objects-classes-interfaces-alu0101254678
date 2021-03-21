import 'mocha';
import {expect} from 'chai';
import {Moto} from '../../src/ejercicio-3/moto';

describe('Test que accede a los atributos de la clase moto', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let moto_1: Moto = new Moto('moto_1', 80);

    expect(moto_1.get_nombre()).to.be.equal('moto_1');
    expect(moto_1.get_velocidad()).to.be.equal(80);
  });
});
