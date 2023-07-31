import { Router } from "express";
import { borrarTurno, crearTurno, editarTurno, obtenerTurnoPorId, obtenerTurnos } from "../controllers/turnos.controllers";
import { check } from "express-validator";

const router = Router()
router
  .route("/turnos")
  .get(obtenerTurnos)
  .post([
    check("fechaTurno")
    .notEmpty()
    .withMessage("La fecha es obligatoria"),
    check("nombMascota")
    .notEmpty()
    .withMessage("El detalle es obligatorio")
    .isLength({min:2,max:15})
    .withMessage("el nombre de mascota debe tener un mínimo de 2 y un máximo de 15 caracteres"),
    check("hora")
      .notEmpty()
      .withMessage("la hora es obligatoria"),
    check("veterinario")
      .notEmpty()
      .withMessage("El veterinario es obligatorio"),
    check("detalleCita")
      .notEmpty()
      .withMessage("El detalle es obligatorio")
      .isLength({min:10,max:100})
      .withMessage("el detalle debe tener un mínimo de 10 y un máximo de 100 caracteres")
     ],
  crearTurno)
router.route("/turnos/:id")
  .delete(borrarTurno)
  .put([
    check("fechaTurno")
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .isDate()
    .withMessage("el formato es invalido"),
    check("nombMascota")
    .notEmpty()
    .withMessage("El detalle es obligatorio")
    .isLength({min:2,max:10})
    .withMessage("el nombre de mascota debe tener un mínimo de 2 y un máximo de 10 caracteres"),
    check("hora")
      .notEmpty()
      .withMessage("la hora es obligatoria"),
    check("veterinario")
      .notEmpty()
      .withMessage("El veterinario es obligatorio"),
      check("detalleCita")
      .notEmpty()
      .withMessage("El detalle es obligatorio")
      .isLength({min:10,max:100})
      .withMessage("el detalle debe tener un mínimo de 10 y un máximo de 100 caracteres")
     ],
     editarTurno)
  .get(obtenerTurnoPorId);
export default router