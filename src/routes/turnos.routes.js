import { Router } from "express";
import { crearTurno, obtenerTurnos } from "../controllers/turnos.controllers";

const router = Router()
router.get("/turnos",obtenerTurnos)
router.post("/turnos",crearTurno)

export default router