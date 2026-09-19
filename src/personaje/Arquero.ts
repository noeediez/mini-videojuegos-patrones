import { Personaje } from './Personaje';
import { AtaqueArco } from '../strategy/AtaqueArco';

export class Arquero extends Personaje {
  constructor(nombre: string) {
    super(nombre, 90, new AtaqueArco());
  }
}