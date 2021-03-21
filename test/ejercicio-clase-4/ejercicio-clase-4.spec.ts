import 'mocha';
import {expect} from 'chai';
import {Asignatura} from '../../src/ejercicio-clase-4/ejercicio-clase-4';
import {Estudiante} from '../../src/ejercicio-clase-2/ejercicio-clase-2';
import {Profesor} from '../../src/ejercicio-clase-3/ejercicio-clase-3';

describe('Test que accede a los atributos de la clase asignatura', () => {
  it('Se accede al vector de estudiantes y de profesores', () => {
    // dos variables para el vector de estudiantes, y dos para los profesores
    let estudiante_1: Estudiante = new Estudiante('yago', 'perez', 2000, 'hombre', 'yagoy90@gmail.com');
    let estudiante_2: Estudiante = new Estudiante('katia', 'gonzalez', 2001, 'mujer', 'katia90@gmail.com');

    let profesor_1: Profesor = new Profesor('jesus', 'martin', 1970, 'hombre', 'jessus90@gmail.com');
    let profesor_2: Profesor = new Profesor('marta', 'gonzalez', 1980, 'mujer', 'marta90@gmail.com');

    let asignatura: string = 'Matematicas';

    let vector_estudiantes: Array<Estudiante> = [estudiante_1, estudiante_2];
    let vector_profesores: Array<Profesor> = [profesor_1, profesor_2];

    let asignatura_1: Asignatura = new Asignatura(vector_estudiantes, vector_profesores, asignatura);

    expect(asignatura_1.asignatura).to.be.equal('Matematicas');
    expect(asignatura_1.vector_estudiantes.includes(estudiante_1)).to.be.equal(true);
    expect(asignatura_1.vector_estudiantes.includes(estudiante_2)).to.be.equal(true);

    expect(asignatura_1.vector_profesores.includes(profesor_1)).to.be.equal(true);
    expect(asignatura_1.vector_profesores.includes(profesor_2)).to.be.equal(true);

    expect(asignatura_1.vector_estudiantes[0].get_genero()).to.be.equal('hombre');

    expect(asignatura_1).instanceOf(Asignatura);

  });
});
