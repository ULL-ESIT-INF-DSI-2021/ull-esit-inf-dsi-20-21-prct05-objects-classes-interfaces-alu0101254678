import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-clase-1/ejercicio-clase-1';

describe('Test que accede a los atributos de la clase persona', () => {
  it('Se accede al nombre, apellido, fecha de nacimiento, genero', () => {
    // una variable con mi nombre, para la prueba
    let persona_1: Persona = new Persona("yago", "perez", 2000, "hombre");

    expect(persona_1.get_nombre()).to.be.equal('yago');
    expect(persona_1.get_apellido()).to.be.equal('perez');
    expect(persona_1.get_fecha_nacimiento()).to.be.equal(2000);
    expect(persona_1.get_fecha_nacimiento()).not.to.be.equal(1999);
    expect(persona_1.get_genero()).to.be.equal('hombre');
  });

  it('Se modifica al nombre, apellido, fecha de nacimiento, genero', () => {
    // una variable con mi nombre, para la prueba
    let persona_1: Persona = new Persona("yago", "perez", 2000, "hombre");

    expect(persona_1.set_nombre('kevin')).to.be.equal('kevin');
    expect(persona_1.set_apellido('alonso')).to.be.equal('alonso');
    expect(persona_1.set_fecha_nacimiento(2000)).to.be.equal(2000);
    expect(persona_1.set_genero('hombre')).to.be.equal('hombre');
  });

});