import { Guerrero } from '../../src/personaje/Guerrero';

describe('Personaje y cambios de estado', () => {

  test('un guerrero comienza con vida máxima', () => {
    const guerrero = new Guerrero('Thor');

    expect(guerrero.getVida()).toBe(100);
    expect(guerrero.getEstado()).toBe('NORMAL');
  });

  test('al recibir daño pasa a estado herido', () => {
    const guerrero = new Guerrero('Thor');

    guerrero.recibirDanio(30);

    expect(guerrero.getVida()).toBe(70);
    expect(guerrero.getEstado()).toBe('HERIDO');
  });

  test('cuando la vida llega a cero pasa a estado muerto', () => {
    const guerrero = new Guerrero('Thor');

    guerrero.recibirDanio(100);

    expect(guerrero.getVida()).toBe(0);
    expect(guerrero.getEstado()).toBe('MUERTO');
  });

  test('un personaje muerto no puede atacar', () => {
    const guerrero = new Guerrero('Thor');

    guerrero.recibirDanio(100);

    expect(guerrero.atacar()).toBe(0);
  });
test('recibir daño cero no modifica la vida', () => {
  const guerrero = new Guerrero('Thor');

  guerrero.recibirDanio(0);

  expect(guerrero.getVida()).toBe(100);
  expect(guerrero.getEstado()).toBe('NORMAL');
});

test('recibir daño mayor que la vida deja la vida en cero', () => {
  const guerrero = new Guerrero('Thor');

  guerrero.recibirDanio(150);

  expect(guerrero.getVida()).toBe(0);
  expect(guerrero.getEstado()).toBe('MUERTO');
});

test('un personaje herido todavía puede atacar', () => {
  const guerrero = new Guerrero('Thor');

  guerrero.recibirDanio(30);

  expect(guerrero.getEstado()).toBe('HERIDO');
  expect(guerrero.atacar()).toBe(20);
});
});