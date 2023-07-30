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
      check("apellidoDueno")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
      check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Debe tener un de email valido")
        .isLength({ min: 2, max: 100 })
        .withMessage("El email debe contener entre 2 y 100 caracteres"),
      check("telefono")
        .notEmpty()
        .withMessage("El telefono es obligatorio")
        .isMobilePhone("any", {
          strictMode: false,
        })
        .withMessage("El telefono debe contener un formato valido")
        .isLength({ min: 5, max: 20 })
        .withMessage("El telefono debe contener entre 5 y 20 caracteres"),
      check("direccion")
        .notEmpty()
        .withMessage("La direccion es obligatoria")
        .isLength({ min: 2, max: 100 })
        .withMessage("La direccion debe contener entre 2 y 100 caracteres"),
      check("nombreMascota")
        .notEmpty()
        .withMessage("El nombre de la mascota es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre de la mascota puede contener entre 2 y 100 caracteres"
        ),
      check("especie")
        .notEmpty()
        .withMessage("Debe aclarar la especie")
        .isIn(["Perro", "Gato", "Conejo"])
        .withMessage(
          "Debe elegir una de las siguientes opciones; Gato,Perro, Conejo"
        ),
      check("raza").notEmpty().withMessage("falla aca"),
    ],
    crearPacientes
  );
router
  .route("/pacientes/:id")
  .delete(borrarPaciente)
  .get(obtenerPacientePorId)
  .put(
    [
      check("nombreDueno").notEmpty().withMessage("El nombre es obligatorio"),
      check("apellidoDueno")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
      check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Debe tener un de email valido")
        .isLength({ min: 2, max: 100 })
        .withMessage("El email debe contener entre 2 y 100 caracteres"),
      check("telefono")
        .notEmpty()
        .withMessage("El telefono es obligatorio")
        .isMobilePhone("any", {
          strictMode: false,
        })
        .withMessage("El telefono debe contener un formato valido")
        .isLength({ min: 5, max: 20 })
        .withMessage("El telefono debe contener entre 5 y 20 caracteres"),
      check("direccion")
        .notEmpty()
        .withMessage("La direccion es obligatoria")
        .isLength({ min: 2, max: 100 })
        .withMessage("La direccion debe contener entre 2 y 100 caracteres"),
      check("nombreMascota")
        .notEmpty()
        .withMessage("El nombre de la mascota es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre de la mascota puede contener entre 2 y 100 caracteres"
        ),
      check("especie")
        .notEmpty()
        .withMessage("Debe aclarar la especie")
        .isIn(["Perro", "Gato", "Conejo"])
        .withMessage(
          "Debe elegir una de las siguientes opciones; Gato,Perro, Conejo"
        ),
      check("raza").notEmpty().withMessage("falla aca"),
    ],
    editarPaciente
  );

export default router;
