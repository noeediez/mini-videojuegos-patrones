import { Personaje } from '../../src/personaje/Personaje';
import { EstrategiaAtaque } from '../../src/strategy/EstrategiaAtaque';

class PersonajePrueba extends Personaje {
  constructor(estrategia: EstrategiaAtaque) {
    super('Personaje de prueba', 100, estrategia);
  }
}

describe('Mocks - Personaje y EstrategiaAtaque', () => {

  test('Personaje utiliza la estrategia de ataque proporcionada', () => {
    const estrategiaMock: EstrategiaAtaque = { //mocks prueba otra pieza personaje pero reemplazando su dependencia por una falsa, no importa si ataque espada funciona bien 
      atacar: jest.fn().mockReturnValue(999), //sino que personaje lo use correctamente. y sin strategy el mock no se podria escribir asi de limpio 
    };                                       //porque no habria que implementar la interfaz EstrategiaAtaque para poder usarlo en el constructor de PersonajePrueba
    const personaje = new PersonajePrueba(estrategiaMock);

    const danio = personaje.atacar();

    expect(danio).toBe(999);
    expect(estrategiaMock.atacar).toHaveBeenCalledTimes(1);
  });

});