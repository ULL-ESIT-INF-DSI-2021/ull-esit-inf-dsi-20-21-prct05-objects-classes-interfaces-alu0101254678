import 'mocha';
import {expect} from 'chai';
import {Profesor} from '../../src/ejercicio-clase-3/ejercicio-clase-3';

describe('Test que accede a los atributos de la clase profesor', () => {
  it('Se accede al nombre, apellido, fecha de nacimiento, genero, correo electronico', () => {
    // una variable con mi nombre, para la prueba
    let profesor_1: Profesor = new Profesor('yago', 'perez', 2000, 'hombre', 'yagoy90@gmail.com');

    expect(profesor_1.get_nombre()).to.be.equal('yago');
    expect(profesor_1.get_apellido()).to.be.equal('perez');
    expect(profesor_1.get_fecha_nacimiento()).to.be.equal(2000);
    expect(profesor_1.get_fecha_nacimiento()).not.to.be.equal(1999);
    expect(profesor_1.get_genero()).to.be.equal('hombre');
    expect(profesor_1.get_correo_electronico()).to.be.equal('yagoy90@gmail.com');
  });

  it('Se modifica el nombre, apellido, fecha de nacimiento, genero, correo electronico', () => {
    // una variable con mi nombre, para la prueba
    let profesor_1: Profesor = new Profesor('yago', 'perez', 2000, 'hombre', 'yagoy90@gmail.com');

    expect(profesor_1.set_nombre('kevin')).to.be.equal('kevin');
    expect(profesor_1.set_apellido('alonso')).to.be.equal('alonso');
    expect(profesor_1.set_fecha_nacimiento(2000)).to.be.equal(2000);
    expect(profesor_1.set_fecha_nacimiento(2000)).not.to.be.equal(1999);
    expect(profesor_1.set_genero('hombre')).to.be.equal('hombre');
    expect(profesor_1.set_correo_electronico('yagoy90@hotmail.com')).to.be.equal('yagoy90@hotmail.com');
  });
});
