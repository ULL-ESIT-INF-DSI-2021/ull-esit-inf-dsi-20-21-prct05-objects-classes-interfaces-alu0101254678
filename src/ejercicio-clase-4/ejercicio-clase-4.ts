import {Estudiante} from '../ejercicio-clase-2/ejercicio-clase-2';
import {Profesor} from '../ejercicio-clase-3/ejercicio-clase-3';
/**
 * La clase asignatura lo que hace es que un conjunto de estudiantes, estudien
 * una asignatura determinada, y un conjunto de profesores la imparta,
 * esta clase lo que tiene son tres atributos, un vector de estudiantes,
 * un vector de profesores, y una asignatura
 */
export class Asignatura {
  vector_estudiantes: Array<Estudiante>;
  vector_profesores: Array<Profesor>;
  asignatura: string;

  constructor(vector_estudiantes: Array<Estudiante>, vector_profesores: Array<Profesor>, asignatura: string) {
    this.vector_estudiantes = vector_estudiantes;
    this.vector_profesores = vector_profesores;
    this.asignatura = asignatura;
  }
  /**
   * Este método lo que hace es imprimir la asignatura estudiada por cada uno
   * de los estudiantes en formato tabla
   */
  print_estudiantes() {
    console.log(`La asignatura ${this.asignatura} es estudiada por los alumnos:`);
    console.table(this.vector_estudiantes);
    /* for (let indice = 0; indice < this.vector_estudiantes.length; indice ++) {
      console.log(this.vector_estudiantes[indice].get_nombre());
    }*/
  }
  /**
   * Este método realiza lo mismo que lo anterior, pero con los profesores
   */
  print_profesores() {
    console.log(`La asignatura ${this.asignatura} es impartida por los profesores:`);
    console.table(this.vector_profesores);
    /* for (let indice = 0; indice < this.vector_profesores.length; indice ++) {
      console.log(this.vector_profesores[indice].get_nombre());
    }*/
  }
}

let estudiante_1: Estudiante = new Estudiante('yago', 'perez', 2000, 'hombre', 'yagoy90@gmail.com');
let estudiante_2: Estudiante = new Estudiante('katia', 'gonzalez', 2001, 'mujer', 'katia90@gmail.com');

let profesor_1: Profesor = new Profesor('jesus', 'martin', 1970, 'hombre', 'jessus90@gmail.com');
let profesor_2: Profesor = new Profesor('marta', 'gonzalez', 1980, 'mujer', 'marta90@gmail.com');

let asignatura: string = 'Matematicas';

let vector_estudiantes: Array<Estudiante> = [estudiante_1, estudiante_2];
let vector_profesores: Array<Profesor> = [profesor_1, profesor_2];

let asignatura_1: Asignatura = new Asignatura(vector_estudiantes, vector_profesores, asignatura);

asignatura_1.print_estudiantes();
asignatura_1.print_profesores();