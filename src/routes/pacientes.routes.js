import { Router } from "express"
import { crearPacientes, obtenerPacientes } from "../controllers/pacientes.controllers";


const router = Router();

router.route('/pacientes').get(obtenerPacientes).post(crearPacientes);

export default router
