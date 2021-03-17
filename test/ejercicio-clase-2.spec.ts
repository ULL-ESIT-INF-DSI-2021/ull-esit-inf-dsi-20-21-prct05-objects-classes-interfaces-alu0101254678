import 'mocha';
import {expect} from 'chai';
import {Estudiante} from '../src/ejercicio-clase-2/ejercicio-clase-2';

describe('Test que accede a los atributos de la clase estudiante', () => {
  it('Se accede al nombre, apellido, fecha de nacimiento, genero, correo electronico, asignatura', () => {
    // una variable con mi nombre, para la prueba
    let estudiante_1: Estudiante = new Estudiante('yago', 'perez', 2000, 'hombre', 'yagoy90@gmail.com', 'dsi');

    expect(estudiante_1.get_nombre()).to.be.equal('yago');
    expect(estudiante_1.get_apellido()).to.be.equal('perez');
    expect(estudiante_1.get_fecha_nacimiento()).to.be.equal(2000);
    expect(estudiante_1.get_fecha_nacimiento()).not.to.be.equal(1999);
    expect(estudiante_1.get_genero()).to.be.equal('hombre');
    expect(estudiante_1.get_correo_electronico()).to.be.equal('yagoy90@gmail.com');
    expect(estudiante_1.get_correo_asignatura()).to.be.equal('dsi');
  });

});