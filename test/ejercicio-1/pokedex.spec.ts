import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

describe('Test que accede a los atributos de la clase pokedex', () => {
  it('Se accede al nombre, peso, altura, tipo, ataque, defensa, velocidad, y vida de cada uno de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon("pikachu", 10, 1, "electrico", 100, 50, 150, 30);
    let blastoise: Pokemon = new Pokemon("blastoise", 100, 50, "agua", 200, 100, 90, 290);

    let coleccion: Pokedex = new Pokedex([pikachu, blastoise]);

    expect(pikachu.nombre).to.be.equal('pikachu');
    expect(pikachu.peso).to.be.equal(10);
    expect(pikachu.altura).to.be.equal(1);
    expect(pikachu.tipo).to.be.equal('electrico');
    expect(pikachu.ataque).to.be.equal(100);
    expect(pikachu.defensa).to.be.equal(50);
    expect(pikachu.velocidad).to.be.equal(150);
    expect(pikachu.vida).to.be.equal(30);

    expect(blastoise.nombre).to.be.equal('blastoise');
    expect(blastoise.peso).to.be.equal(100);
    expect(blastoise.altura).to.be.equal(50);
    expect(blastoise.tipo).to.be.equal('agua');
    expect(blastoise.ataque).to.be.equal(200);
    expect(blastoise.defensa).to.be.equal(100);
    expect(blastoise.velocidad).to.be.equal(90);
    expect(blastoise.vida).to.be.equal(290);

    expect(coleccion.vector_Pokemon).to.have.same.members([pikachu, blastoise]);
    // expect(coleccion.mostrar_Pokemon()).to.be.a('void');
    expect(coleccion.vector_Pokemon).to.include(blastoise);
  });
});
