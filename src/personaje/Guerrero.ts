import { Personaje } from './Personaje';
import { AtaqueEspada } from '../strategy/AtaqueEspada';

export class Guerrero extends Personaje {
  constructor(nombre: string) {
    super(nombre, 100, new AtaqueEspada());
  }
}