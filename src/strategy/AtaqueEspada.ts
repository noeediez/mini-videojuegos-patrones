import { EstrategiaAtaque } from './EstrategiaAtaque';

export class AtaqueEspada implements EstrategiaAtaque {
  atacar(): number {
    return 20;
  }
}