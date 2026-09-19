import { PersonajeFactory } from '../../src/factory/PersonajeFactory';
import { Guerrero } from '../../src/personaje/Guerrero';
import { Mago } from '../../src/personaje/Mago';
import { Arquero } from '../../src/personaje/Arquero';

describe('Patrón Factory', () => {

  test('crea correctamente un guerrero', () => {
    const personaje = PersonajeFactory.crear('GUERRERO', 'Thor');

    expect(personaje).toBeInstanceOf(Guerrero);
    expect(personaje.getNombre()).toBe('Thor');
  });

  test('crea correctamente un mago', () => {
    const personaje = PersonajeFactory.crear('MAGO', 'Gandalf');

    expect(personaje).toBeInstanceOf(Mago);
  });

  test('crea correctamente un arquero', () => {
    const personaje = PersonajeFactory.crear('ARQUERO', 'Legolas');

    expect(personaje).toBeInstanceOf(Arquero);
  });

  test('rechaza un tipo de personaje desconocido', () => {
    expect(() => {
      PersonajeFactory.crear('DRAGON', 'Smaug');
    }).toThrow();
  });

});