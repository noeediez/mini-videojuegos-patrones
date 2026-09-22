import { EstrategiaAtaque } from '../strategy/EstrategiaAtaque';
import { Estado } from '../state/Estado';
import { EstadoNormal } from '../state/EstadoNormal';
import { EstadoHerido } from '../state/EstadoHerido';
import { EstadoMuerto } from '../state/EstadoMuerto';

export abstract class Personaje {
  protected vida: number;
  protected vidaMaxima: number;
  protected estrategia: EstrategiaAtaque;
  protected estado: Estado; 

  constructor(
    protected nombre: string,
    vidaMaxima: number,
    estrategia: EstrategiaAtaque //cualquier estrategia de ataque que implemente la interfaz EstrategiaAtaque puede ser usada por el personaje, sin importar si es un ataque de espada, arco o magico. 
  ) {                             //permitiendo que cambie en vivo 
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
    this.estrategia = estrategia;
    this.estado = new EstadoNormal();
  }

  atacar(): number {  //antes de atacar, se le pregunta al estado si se puede. el personaje no sabe las reglas solo delega lapregunta .
    if (!this.estado.puedeAtacar()) {
      return 0;
    }

    return this.estrategia.atacar(); //personaje delega no decide como
  }

  recibirDanio(danio: number): void {
    this.vida = Math.max(0, this.vida - danio);
    this.actualizarEstado();  //cambio de estado AUTOMATICO
  }
  //strategy permite cambiar la estategia en plena ejecucion sin saber como funciona por dentro, solo sabe que tiene un metodo atacar() que devuelve un numero
  cambiarEstrategia(estrategia: EstrategiaAtaque): void {
    this.estrategia = estrategia;
  }

  private actualizarEstado(): void { //aca se ve el state porque el objeto decide su transicion de visa sin intervencion externa ni del main.ts
    if (this.vida === 0) {
      this.estado = new EstadoMuerto();
    } else if (this.vida < this.vidaMaxima) {
      this.estado = new EstadoHerido();
    } else {
      this.estado = new EstadoNormal();
    }
  }

  getNombre(): string {
    return this.nombre;
  }

  getVida(): number {
    return this.vida;
  }

  getEstado(): string {
    return this.estado.nombre();
  }
}