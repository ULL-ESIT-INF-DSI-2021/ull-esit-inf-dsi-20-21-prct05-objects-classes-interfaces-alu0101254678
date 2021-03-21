import 'mocha';
import {expect} from 'chai';
import {Bicicleta} from '../../src/ejercicio-3/bicicleta';

describe('Test que accede a los atributos de la clase bicicleta', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let bicicleta_1: Bicicleta = new Bicicleta('bici_1', 30);

    expect(bicicleta_1.get_nombre()).to.be.equal('bici_1');
    expect(bicicleta_1.get_velocidad()).to.be.equal(30);
  });
});
