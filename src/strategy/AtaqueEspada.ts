import { EstrategiaAtaque } from './EstrategiaAtaque';
//esto vive solo ACA, no en personaje ni guerrero.
export class AtaqueEspada implements EstrategiaAtaque {
  atacar(): number {
    return 20;
  }
}