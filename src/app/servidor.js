//librerias
import express from "express";
import { engine } from "express-handlebars";
import { Server as ServerSocketIo } from "socket.io";
//config
import { PORT } from "../config/server.config.js";
//routers
import { routerApi } from "../routers/api.router.js";
import { routerViews } from "../routers/view.router.js";
import { conectar } from "../database/mongoose.js";

const app = express();

await conectar();

const server = app.listen(PORT, () => {
  console.log(` servidor escuchando en el puerto ${PORT}`);
  console.log(`main-view en http://localhost:8080/videojuegos`);
});

const io = new ServerSocketIo(server);

io.on("connection", async (socket) => {
  console.log("cliente conectado");
});

//cargo el servidor de socket a las peticiones
app.use((req, res, next) => {
  req["io"] = io;
  next();
});

//MIDWARES DE USO
app.use(express.static("./public")); /*declaro la carpeta publica*/
app.use(express.json());
/*declaro para poder parcear los json que llegan desde un formulario*/
app.engine("handlebars", engine());
/*declaro el manejador para poder usar handlebars*/
app.set("views", "./views");
/*declaro la carpeta que sera de vistas*/
app.set("view engine", "handlebars");
/*declaro si no existe extension que usara*/

/*NOTA: Si envio formulario desde la url tambien debo utilizar URLencode*/

//ROUTERS
app.use("/api", routerApi);
app.use("/", routerViews);
