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
    estrategia: EstrategiaAtaque
  ) {
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
    this.estrategia = estrategia;
    this.estado = new EstadoNormal();
  }

  atacar(): number {
    if (!this.estado.puedeAtacar()) {
      return 0;
    }

    return this.estrategia.atacar();
  }

  recibirDanio(danio: number): void {
    this.vida = Math.max(0, this.vida - danio);
    this.actualizarEstado();
  }

  cambiarEstrategia(estrategia: EstrategiaAtaque): void {
    this.estrategia = estrategia;
  }

  private actualizarEstado(): void {
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