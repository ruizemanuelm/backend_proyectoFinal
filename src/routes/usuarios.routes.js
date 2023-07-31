import { Router } from "express";
import { crearUsuario, loguearUsuario, obtenerUsuarios, obtenerUnUsuario } from "../controllers/usuarios.controllers";

const router = Router()

router.post("/usuarios/login",loguearUsuario)
router.get("/usuarios", obtenerUsuarios)
router.get("/usuarios/:id", obtenerUnUsuario)
router.post("/usuarios/register",crearUsuario)

export default router