import { Router } from "express";
import { postVJController } from "../controllers/videojuegos.post.controller.js";

export const routerApi = Router();

routerApi.post("/videojuegos", postVJController);
