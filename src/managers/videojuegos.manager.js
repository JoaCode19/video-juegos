import mongoose from "mongoose";

const SchemaVJ = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    genero: { type: String, required: true },
    plataforma: { type: String, required: true },
  },
  { versionKey: false }
);

class VideojuegosManager {
  #videojuegosDb;
  constructor() {
    this.#videojuegosDb = mongoose.model("videojuegos", SchemaVJ);
  }

  async guardar(datosVJ) {
    const vjguardado = await this.#videojuegosDb.create(datosVJ);
    return vjguardado;
    //ver si parse y stringify
  }
  async obtenerTodos() {
    const vjsdisp = await this.#videojuegosDb.find().lean();
    return vjsdisp;
  }
  async obtenerSegunID(id) {
    const vjsdisp = await this.#videojuegosDb.findById(id).lean();
    return vjsdisp;
  }
}

export const vjm = new VideojuegosManager();
