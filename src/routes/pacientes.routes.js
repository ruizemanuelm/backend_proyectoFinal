import { Router } from "express";
import {
  borrarPaciente,
  crearPacientes,
  editarPaciente,
  obtenerPacientePorId,
  obtenerPacientes,
} from "../controllers/pacientes.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/pacientes")
  .get(obtenerPacientes)
  .post(
    [
      check("nombreDueno").notEmpty().withMessage("El nombre es obligatorio"),
      check("apellidoDueno").notEmpty().withMessage("El apellido es obligatorio"),
      check("email").notEmpty().isEmail().withMessage("El email es obligatorio"),
      check("telefono").notEmpty().isMobilePhone("any",{
        strictMode: false,
      }).withMessage("El telefono es obligatorio"),
      check("direccion").notEmpty().withMessage("La direccion es obligatoria"),
      check("nombreMascota").notEmpty().withMessage("El nombre de la mascota es obligatorio"),
      check("especie").notEmpty().withMessage("Debe aclarar la especie")
    ],
    crearPacientes
  );
router
  .route("/pacientes/:id")
  .delete(borrarPaciente)
  .put(editarPaciente)
  .get(obtenerPacientePorId);

export default router;
