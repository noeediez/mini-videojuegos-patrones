import { PersonajeFactory } from '../../src/factory/PersonajeFactory';
import { AtaqueMagico } from '../../src/strategy/AtaqueMagico';

describe('E2E - Flujo completo de batalla', () => {

  test('un jugador puede atacar a un enemigo hasta derrotarlo', () => {
    // Crear personajes mediante Factory
    const jugador = PersonajeFactory.crear('GUERRERO', 'Thor');
    const enemigo = PersonajeFactory.crear('MAGO', 'Gandalf');

    // Estado inicial
    expect(jugador.getVida()).toBe(100);
    expect(enemigo.getVida()).toBe(80);
    expect(enemigo.getEstado()).toBe('NORMAL');

    // Primer ataque
    let danio = jugador.atacar();
    enemigo.recibirDanio(danio);

    expect(enemigo.getVida()).toBe(60);
    expect(enemigo.getEstado()).toBe('HERIDO');

    // Segundo ataque
    danio = jugador.atacar();
    enemigo.recibirDanio(danio);

    expect(enemigo.getVida()).toBe(40);
    expect(enemigo.getEstado()).toBe('HERIDO');

    // Tercer ataque
    danio = jugador.atacar();
    enemigo.recibirDanio(danio);

    expect(enemigo.getVida()).toBe(20);
    expect(enemigo.getEstado()).toBe('HERIDO');

    // Cuarto ataque
    danio = jugador.atacar();
    enemigo.recibirDanio(danio);

    // Estado final
    expect(enemigo.getVida()).toBe(0);
    expect(enemigo.getEstado()).toBe('MUERTO');

    // Un personaje muerto no puede atacar
    expect(enemigo.atacar()).toBe(0);
  });

  test('el jugador puede cambiar su estrategia durante la batalla', () => {
    const jugador = PersonajeFactory.crear('GUERRERO', 'Thor');
    const enemigo = PersonajeFactory.crear('MAGO', 'Gandalf');

    // Ataque inicial con espada
    let danio = jugador.atacar();

    expect(danio).toBe(20);

    enemigo.recibirDanio(danio);

    expect(enemigo.getVida()).toBe(60);

    // Cambiar la estrategia a magia
    jugador.cambiarEstrategia(new AtaqueMagico());

    // Nuevo ataque con magia
    danio = jugador.atacar();

    expect(danio).toBe(25);

    enemigo.recibirDanio(danio);

    expect(enemigo.getVida()).toBe(35);
  });

});