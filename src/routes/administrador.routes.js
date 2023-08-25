import { Router } from 'express'
import { crearAdministrador, loguearAdministrador, obtenerAdministrador,  } from '../controllers/administradorcontrollers'

const router = Router ()

router.route('/administrador')
.get(obtenerAdministrador)
router.post("/administrador/register",crearAdministrador)
router.post("/administrador/login",loguearAdministrador)

export default router


/*const URL_administrador = import.meta.env.VITE_API_ADMINISTRADOR


export const registraradmin = async (admin)=>{
  try{
      const respuesta = await fetch(URL_administrador,{
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(admin)
      });
      
      const administrador = await respuesta.json();
      return {
          status: respuesta.status,
          mensaje: administrador.mensaje,
      }
      
  }catch(error){
      console.log(error)
  }
}

export const loguearAdministrador = async (admin)=>{
  try{
      const respuesta = await fetch(URL_administrador+'/login',{
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(admin)
      });
      
      const administrador = await respuesta.json();
      return {
          status: respuesta.status,
          mensaje: administrador.mensaje,
          nombreAdministrador: administrador.nombreAdministrador,
          email: administrador.email,
          password: administrador.password,
          token: administrador.token
      }
      
  }catch(error){
      console.log(error)
  }
}*/
