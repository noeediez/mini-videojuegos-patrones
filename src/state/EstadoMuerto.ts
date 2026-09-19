import { Estado } from './Estado';

export class EstadoMuerto implements Estado {
  nombre(): string {
    return 'MUERTO';
  }

  puedeAtacar(): boolean {
    return false;
  }
}