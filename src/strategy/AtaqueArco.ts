import { EstrategiaAtaque } from './EstrategiaAtaque';

export class AtaqueArco implements EstrategiaAtaque {
  atacar(): number {
    return 15;
  }
}