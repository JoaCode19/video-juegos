import mongoose, { mongo } from "mongoose";
import { MONGODB_CNX_STR } from "../config/database.config.js";

export async function conectar() {
  await mongoose.connect(
    "mongodb+srv://joaCode19:4756643joa@cluster0.tmp8a5p.mongodb.net/Videojuegos?retryWrites=true&w=majority"
  );

  // await mongoose.connect(MONGODB_CNX_STR);
  // console.log(`base de datos conectada a ${MONGODB_CNX_STR}`);
}
