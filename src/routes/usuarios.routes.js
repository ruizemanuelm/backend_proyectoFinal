import { Router } from "express";
import { crearUsuario, loguearUsuario } from "../controllers/usuarios.controllers";

const router = Router()

router.post("/usuarios/login",loguearUsuario)
router.post("/usuarios/register",crearUsuario)

export default router