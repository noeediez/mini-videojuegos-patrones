import { Guerrero } from '../../src/personaje/Guerrero';

describe('Prueba de estrés - Combate', () => {

  test('el personaje soporta 10000 operaciones de combate', () => {
    const guerrero = new Guerrero('Thor');

    for (let i = 0; i < 10000; i++) {
      guerrero.recibirDanio(1);
    }

    expect(guerrero.getVida()).toBe(0);
    expect(guerrero.getEstado()).toBe('MUERTO');
    expect(guerrero.atacar()).toBe(0);
  });

});