export interface EstrategiaAtaque {
  atacar(): number;
}
//es una interfaz que representa un "algoritmo de ataque intercambianle" 
//cualquier arma nueva solo tiene q implementar esta interfaz y el personaje puede usarla sin saber como funciona por dentro