import { AtaqueEspada } from '../../src/strategy/AtaqueEspada';
import { AtaqueMagico } from '../../src/strategy/AtaqueMagico';
import { AtaqueArco } from '../../src/strategy/AtaqueArco';

describe('Patrón Strategy - Ataques', () => {

  test('la espada realiza 20 de daño', () => {
    const ataque = new AtaqueEspada();

    expect(ataque.atacar()).toBe(20);
  });

  test('la magia realiza 25 de daño', () => {
    const ataque = new AtaqueMagico();

    expect(ataque.atacar()).toBe(25);
  });

  test('el arco realiza 15 de daño', () => {
    const ataque = new AtaqueArco();

    expect(ataque.atacar()).toBe(15);
  });

});