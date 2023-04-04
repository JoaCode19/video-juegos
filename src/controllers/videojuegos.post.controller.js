import { Videojuego } from "../entidades/videojuegos.js";
import { vjm } from "../managers/videojuegos.manager.js";
import { io } from "../app/servidor.js";

export async function postVJController(req, res, next) {
  const videojuego = new Videojuego(req.body);
  const result = await vjm.guardar(videojuego.datos());
  console.log(result);
  // el servidor que cargue en el req[io] lo uso para emit un event(ver porque se contrapone con el envio de datos a la base)
  req["io"].sockets.emit("reloadVJ", await vjm.obtenerTodos());
  res.json(result);
}
