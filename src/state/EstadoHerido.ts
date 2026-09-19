import { Estado } from './Estado';

export class EstadoHerido implements Estado {
  nombre(): string {
    return 'HERIDO';
  }

  puedeAtacar(): boolean {
    return true;
  }
}