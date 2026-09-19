import readlineSync from 'readline-sync';

import { PersonajeFactory } from './factory/PersonajeFactory';
import { AtaqueEspada } from './strategy/AtaqueEspada';
import { AtaqueMagico } from './strategy/AtaqueMagico';
import { AtaqueArco } from './strategy/AtaqueArco';

const jugador = PersonajeFactory.crear('GUERRERO', 'Thor');
const enemigo = PersonajeFactory.crear('MAGO', 'Gandalf');

let jugando = true;

while (jugando) {
  console.log('\n================================');
  console.log('           ⚔️ BATALLA');
  console.log('================================');

  console.log(`\nJUGADOR: ${jugador.getNombre()}`);
  console.log(`Vida: ${jugador.getVida()}`);
  console.log(`Estado: ${jugador.getEstado()}`);

  console.log(`\nENEMIGO: ${enemigo.getNombre()}`);
  console.log(`Vida: ${enemigo.getVida()}`);
  console.log(`Estado: ${enemigo.getEstado()}`);

  console.log('\n--------------------------------');
  console.log('[1] Atacar');
  console.log('[2] Cambiar ataque');
  console.log('[3] Salir');
  console.log('--------------------------------');

  const opcion = readlineSync.question('Elegí una opción: ');

  switch (opcion) {
    case '1': {
      const danio = jugador.atacar();

      if (danio === 0) {
        console.log('\n❌ El jugador no puede atacar.');
        break;
      }

      enemigo.recibirDanio(danio);

      console.log(
        `\n⚔️ ${jugador.getNombre()} atacó e hizo ${danio} de daño.`
      );

      console.log(
        `❤️ Vida del enemigo: ${enemigo.getVida()}`
      );

      if (enemigo.getVida() === 0) {
        console.log('\n🏆 ¡Ganaste!');
        jugando = false;
      }

      break;
    }

    case '2': {
      console.log('\nElegí el nuevo ataque:');
      console.log('[1] Espada - 20 daño');
      console.log('[2] Magia - 25 daño');
      console.log('[3] Arco - 15 daño');

      const ataque = readlineSync.question('Elegí: ');

      switch (ataque) {
        case '1':
          jugador.cambiarEstrategia(new AtaqueEspada());
          console.log('\n⚔️ Ataque cambiado a ESPADA.');
          break;

        case '2':
          jugador.cambiarEstrategia(new AtaqueMagico());
          console.log('\n✨ Ataque cambiado a MAGIA.');
          break;

        case '3':
          jugador.cambiarEstrategia(new AtaqueArco());
          console.log('\n🏹 Ataque cambiado a ARCO.');
          break;

        default:
          console.log('\n❌ Opción de ataque inválida.');
      }

      break;
    }

    case '3':
      console.log('\n👋 Juego terminado.');
      jugando = false;
      break;

    default:
      console.log('\n❌ Opción inválida.');
  }
}