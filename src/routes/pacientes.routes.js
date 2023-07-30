import { Router } from "express";
import {
  borrarPaciente,
  crearPacientes,
  editarPaciente,
  obtenerPacientePorId,
  obtenerPacientes,
} from "../controllers/pacientes.controllers";

const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(crearPacientes);
router
  .route("/pacientes/:id")
  .delete(borrarPaciente)
  .put(editarPaciente)
  .get(obtenerPacientePorId);

export default router;
