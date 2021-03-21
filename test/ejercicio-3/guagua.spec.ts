import 'mocha';
import {expect} from 'chai';
import {Guagua} from '../../src/ejercicio-3/guagua';

describe('Test que accede a los atributos de la clase guagua', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let guagua_1: Guagua = new Guagua('guagua_1', 60);

    expect(guagua_1.get_nombre()).to.be.equal('guagua_1');
    expect(guagua_1.get_velocidad()).to.be.equal(60);
  });
});
