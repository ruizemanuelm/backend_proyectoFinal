import { validationResult } from "express-validator";
import Comentario from "../models/comentarios";

export const obtenerComentarios = async (req, res) => {
    try {
      const comentarios = await Comentario.find();
      res.status(200).json(comentarios);
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al buscar los comentarios",
      });
    }
  };
  
  export const crearComentarios = async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errores: errors.array()
        })
      }
      const comentarioNuevo = new Comentario(req.body);
      await comentarioNuevo.save();
      res.status(201).json({
        mensaje: "Se hizo el comentario",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Error al crear comentario",
      });
    }
  };
  