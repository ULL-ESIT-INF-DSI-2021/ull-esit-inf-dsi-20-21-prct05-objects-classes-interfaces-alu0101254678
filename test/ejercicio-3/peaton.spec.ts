import 'mocha';
import {expect} from 'chai';
import {Peaton} from '../../src/ejercicio-3/peaton';

describe('Test que accede a los atributos de la clase peaton', () => {
  it('Se accede a su nombre y a la velocidad', () => {
    let peaton_1: Peaton = new Peaton('peaton_1', 10);

    expect(peaton_1.get_nombre()).to.be.equal('peaton_1');
    expect(peaton_1.get_velocidad()).to.be.equal(10);
  });
});
