import { Router } from "express";
import { borrarTurno, crearTurno, editarTurno, obtenerTurnoPorId, obtenerTurnos } from "../controllers/turnos.controllers";

const router = Router()
router.get("/turnos",obtenerTurnos)
router.post("/turnos",crearTurno)
router
  .route("/turnos/:id")
  .delete(borrarTurno)
  .put(editarTurno)
  .get(obtenerTurnoPorId);
export default router