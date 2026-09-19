import { Estado } from './Estado';

export class EstadoNormal implements Estado {
  nombre(): string {
    return 'NORMAL';
  }

  puedeAtacar(): boolean {
    return true;
  }
}