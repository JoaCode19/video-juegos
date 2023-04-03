import { Router } from "express";
import { vjm } from "../managers/videojuegos.manager.js";

export const routerViews = Router();

routerViews.get("/", (req, res, next) => {
  res.redirect("/videojuegos");
});

routerViews.get("/videojuegos", async (req, res, next) => {
  const videojuegosDisp = await vjm.obtenerTodos();
  res.render("videojuegos", {
    Title: "VideoJuegos",
    listVJ: videojuegosDisp.length > 0,
    videojuegos: videojuegosDisp,
  });
});
