//es importante settear las clases para que cuando lo creo instancie un objeto con ciertas caracteristicas

export class Videojuego {
  #nombre;
  #genero;
  #plataforma;
  constructor({ nombre, genero, plataforma }) {
    (this.#nombre = nombre),
      (this.#genero = genero),
      (this.#plataforma = plataforma);
  }

  //geters = readonly

  get nombre() {
    return this.#nombre;
  }
  get genero() {
    return this.#genero;
  }
  get plataforma() {
    return this.#plataforma;
  }

  //metodos para acceder a copia y proteger original
  datos() {
    return {
      nombre: this.#nombre,
      genero: this.#genero,
      plataforma: this.#plataforma,
    };
  }
}
