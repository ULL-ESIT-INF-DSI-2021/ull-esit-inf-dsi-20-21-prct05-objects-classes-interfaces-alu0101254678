import 'mocha';
import {expect} from 'chai';
import {Patinete} from '../../src/ejercicio-3/patinete';

describe('Test que accede a los atributos de la clase patinete', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let patinete_1: Patinete = new Patinete('patinete_1', 35);

    expect(patinete_1.get_nombre()).to.be.equal('patinete_1');
    expect(patinete_1.get_velocidad()).to.be.equal(35);
  });
});
