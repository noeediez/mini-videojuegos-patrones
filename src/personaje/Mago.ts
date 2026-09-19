import { Personaje } from './Personaje';
import { AtaqueMagico } from '../strategy/AtaqueMagico';

export class Mago extends Personaje {
  constructor(nombre: string) {
    super(nombre, 80, new AtaqueMagico());
  }
}