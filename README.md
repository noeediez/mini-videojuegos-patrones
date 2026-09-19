# 🎮 Mini Videojuego de Combate - Patrones de Diseño

## 1. Descripción del proyecto

Este proyecto consiste en un mini videojuego de combate desarrollado en TypeScript.

El sistema permite crear personajes de diferentes tipos, realizar ataques, recibir daño, cambiar la estrategia de ataque y modificar el comportamiento del personaje según su estado de vida.

El proyecto fue desarrollado con el objetivo de aplicar conceptos de Ingeniería de Software 2, principalmente:

- Programación Orientada a Objetos
- Patrones de Diseño
- Principios SOLID
- Testing
- Verificación y Validación (V&V)
- Diseño centrado en el usuario

---

# 2. Tecnologías utilizadas

- TypeScript
- Node.js
- Jest
- ts-jest
- readline-sync
- Git
- GitHub

---

# 3. Objetivo

El objetivo es desarrollar un sistema pequeño pero extensible que permita representar un combate entre personajes sin concentrar toda la lógica en una única clase.

El sistema debe permitir:

- Crear diferentes tipos de personajes.
- Realizar diferentes tipos de ataques.
- Cambiar la estrategia de ataque durante la ejecución.
- Modificar el comportamiento según el estado del personaje.
- Impedir que un personaje muerto ataque.
- Crear personajes mediante una fábrica.
- Verificar el comportamiento mediante tests unitarios y E2E.

---

# 4. Arquitectura general

El proyecto se divide en diferentes responsabilidades:

```text
Personaje
   │
   ├── Guerrero
   ├── Mago
   └── Arquero

Personaje utiliza:
   │
   ├── Strategy
   │      ├── AtaqueEspada
   │      ├── AtaqueMagico
   │      └── AtaqueArco
   │
   └── State
          ├── EstadoNormal
          ├── EstadoHerido
          └── EstadoMuerto

PersonajeFactory
        │
        ├── crea Guerrero
        ├── crea Mago
        └── crea Arquero