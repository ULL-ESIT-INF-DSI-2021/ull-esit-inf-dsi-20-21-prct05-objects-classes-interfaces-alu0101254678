import 'mocha';
import {expect} from 'chai';
import {Articulo_Investigacion} from '../../src/ejercicio-2/articulo_investigacion';
import {Gestor_Bibliografico} from '../../src/ejercicio-2/gestor_bibliografico';

describe('Test que accede a los atributos de la clase gestor bibliografico', () => {
  it('Se accede al titulo, autor, email, keyword, resumen, fecha, editorial, numero de citas', () => {
    let articulo_1: Articulo_Investigacion = new Articulo_Investigacion('Titulo 1', 'Yago', 'yagoy90@gmail.com', ['hola', 'adios'], 'resumen', 2000, 'panini', 3);

    let vector_bibliografico: Gestor_Bibliografico = new Gestor_Bibliografico([articulo_1]);

    let articulo_investigacion_auxiliar: Array<Articulo_Investigacion> = [articulo_1];

    expect(articulo_1.titulo).to.be.equal('Titulo 1');
    expect(articulo_1.autor_autores).to.be.equal('Yago');
    expect(articulo_1.email_emails).to.be.equal('yagoy90@gmail.com');
    expect(articulo_1.keyworks).to.have.same.members(['hola', 'adios']);
    expect(articulo_1.resumen).to.be.equal('resumen');
    expect(articulo_1.fecha).to.be.equal(2000);
    expect(articulo_1.editorial).to.be.equal('panini');
    expect(articulo_1.numero_citas).to.be.equal(3);

    expect(vector_bibliografico.filtrar_fecha(2000)).to.have.same.members(articulo_investigacion_auxiliar);
    expect(vector_bibliografico.filtrar_editorial('panini')).to.have.same.members(articulo_investigacion_auxiliar);
    expect(vector_bibliografico.filtrar_nombre('Yago')).to.have.same.members(vector_bibliografico.vector_bibliografico);
  });
});
