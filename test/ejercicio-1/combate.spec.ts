import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Combat} from '../../src/ejercicio-1/combate';

describe('Test que accede a los atributos de la clase combate, a los dos pokemon que se encuentran como atributos', () => {
  it('Se accede al nombre, peso, altura, tipo, ataque, defensa, velocidad, y vida de los dos pokemon', () => {
    let pikachu: Pokemon = new Pokemon("pikachu", 10, 1, "electrico", 100, 50, 150, 30);
    let blastoise: Pokemon = new Pokemon("blastoise", 100, 50, "agua", 200, 100, 90, 290);

    let combate_1: Combat = new Combat(pikachu, blastoise);

    expect(pikachu.nombre).to.be.equal('pikachu');
    expect(pikachu.peso).to.be.equal(10);
    expect(pikachu.altura).to.be.equal(1);
    expect(pikachu.tipo).to.be.equal('electrico');
    expect(pikachu.ataque).to.be.equal(100);
    expect(pikachu.defensa).to.be.equal(50);
    expect(pikachu.velocidad).to.be.equal(150);
    expect(pikachu.vida).not.to.be.equal(80);

    expect(combate_1.efective_pokemon_1_to_pokemon_2()).to.be.equal(100);
    expect(combate_1.efective_pokemon_2_to_pokemon_1()).to.be.equal(200);
    // no se como hacer una prueba de start
  });
});
