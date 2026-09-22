import { Estado } from './Estado';

export class EstadoNormal implements Estado {
  nombre(): string {
    return 'NORMAL';
  }

  puedeAtacar(): boolean { // cada estado  sabe por sI mismo si permite atacar o no.
    return true;
  }
}