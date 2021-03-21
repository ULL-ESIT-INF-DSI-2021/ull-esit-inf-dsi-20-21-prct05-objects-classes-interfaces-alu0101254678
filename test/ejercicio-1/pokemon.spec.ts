import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

describe('Test que accede a los atributos de la clase pokemon', () => {
  it('Se accede al nombre, peso, altura, tipo, ataque, defensa, velocidad, y vida', () => {
    let pokemon_1: Pokemon = new Pokemon('pikachu', 5, 1, 'electrico', 100, 50, 150, 80);

    expect(pokemon_1.nombre).to.be.equal('pikachu');
    expect(pokemon_1.peso).to.be.equal(5);
    expect(pokemon_1.altura).to.be.equal(1);
    expect(pokemon_1.tipo).to.be.equal('electrico');
    expect(pokemon_1.ataque).to.be.equal(100);
    expect(pokemon_1.defensa).to.be.equal(50);
    expect(pokemon_1.velocidad).to.be.equal(150);
    expect(pokemon_1.vida).to.be.equal(80);
  });
});
