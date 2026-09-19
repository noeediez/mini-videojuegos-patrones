import { EstrategiaAtaque } from './EstrategiaAtaque';

export class AtaqueMagico implements EstrategiaAtaque {
  atacar(): number {
    return 25;
  }
}