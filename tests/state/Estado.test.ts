import { EstadoNormal } from '../../src/state/EstadoNormal';
import { EstadoHerido } from '../../src/state/EstadoHerido';
import { EstadoMuerto } from '../../src/state/EstadoMuerto';

describe('Patrón State', () => {

  test('el estado normal permite atacar', () => {
    const estado = new EstadoNormal();

    expect(estado.nombre()).toBe('NORMAL');
    expect(estado.puedeAtacar()).toBe(true);
  });

  test('el estado herido permite atacar', () => {
    const estado = new EstadoHerido();

    expect(estado.nombre()).toBe('HERIDO');
    expect(estado.puedeAtacar()).toBe(true);
  });

  test('el estado muerto no permite atacar', () => {
    const estado = new EstadoMuerto();

    expect(estado.nombre()).toBe('MUERTO');
    expect(estado.puedeAtacar()).toBe(false);
  });

});