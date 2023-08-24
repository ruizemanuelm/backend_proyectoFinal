import { Router } from 'express'
import { crearAdministrador, loguearAdministrador, obtenerAdministrador,  } from '../controllers/administradorcontrollers'

const router = Router ()

router.route('/administrador')
.get(obtenerAdministrador)
.post(crearAdministrador)
router.post("/administrador/login",loguearAdministrador)

export default router

