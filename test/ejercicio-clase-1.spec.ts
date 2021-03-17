import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-clase-1/ejercicio-clase-1';

describe('Test que accede a los atributos de la clase persona', () => {
  it('Se accede al nombre, apellido, fecha de nacimiento, genero', () => {
    let persona_1: Persona = new Persona("yago", "perez", 2000, "hombre");
    expect(persona_1.get_nombre().to.be.equal("yago"));
  });

});