import { Personaje } from '../personaje/Personaje';
import { Guerrero } from '../personaje/Guerrero';
import { Mago } from '../personaje/Mago';
import { Arquero } from '../personaje/Arquero';

export class PersonajeFactory { //ACA EL FACTORY METHOD centraliza como se crea un personje porque el main.ts no tiene que saber como se crean los personajes,
  //solo tiene que pedir un personaje de un tipo y el factory se encarga de crearlo 
  static crear(tipo: string, nombre: string): Personaje {
    switch (tipo.toUpperCase()) {
      case 'GUERRERO':
        return new Guerrero(nombre);

      case 'MAGO':
        return new Mago(nombre);

      case 'ARQUERO':
        return new Arquero(nombre);

      default:
        throw new Error(`Tipo de personaje desconocido: ${tipo}`);
    }
  }
}