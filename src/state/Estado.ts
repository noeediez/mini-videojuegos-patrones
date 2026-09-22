export interface Estado {
  nombre(): string;
  puedeAtacar(): boolean;
}

//es la interfaz que representa que puede hacer el personaje segun su condicion actual, NO IMPORTA LA DECISION DEL JUGADOR!