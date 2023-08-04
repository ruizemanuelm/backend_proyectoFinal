import { Router } from "express";
import {
  crearComentarios,
  obtenerComentarios,
} from "../controllers/comentarios.controllers";
import { check } from "express-validator";

const router = Router();

router
  .get(obtenerComentarios)
  .post(
    [
      check("contenidoComentario")
        .notEmpty()
        .withMessage("El comentario no puede estar vacio")
        .isLength({ min:2,max:100 })
        .withMessage("El comentario debe tener entre 2 y 100 caracteres"),
    ],
    crearComentarios
  );
