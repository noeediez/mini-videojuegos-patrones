import { Personaje } from '../../src/personaje/Personaje';
import { EstrategiaAtaque } from '../../src/strategy/EstrategiaAtaque';

class PersonajePrueba extends Personaje {
  constructor(estrategia: EstrategiaAtaque) {
    super('Personaje de prueba', 100, estrategia);
  }
}

describe('Mocks - Personaje y EstrategiaAtaque', () => {

  test('Personaje utiliza la estrategia de ataque proporcionada', () => {
    const estrategiaMock: EstrategiaAtaque = {
      atacar: jest.fn().mockReturnValue(999),
    };

    const personaje = new PersonajePrueba(estrategiaMock);

    const danio = personaje.atacar();

    expect(danio).toBe(999);
    expect(estrategiaMock.atacar).toHaveBeenCalledTimes(1);
  });

});