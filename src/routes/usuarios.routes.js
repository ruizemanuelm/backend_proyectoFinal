import { Router } from "express";
import { crearUsuario, loguearUsuario } from "../controllers/usuarios.controllers";

const router = Router()

router.get("/usuarios",loguearUsuario)
router.post("/usuarios",crearUsuario)

export default router