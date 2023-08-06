import jwt from 'jsonwebtoken' 
//esto es un middleware personalizado 

const validarJWT = (req, res, next)=>{
    const token = req.header('x-token');
    if(!token){ 
        return res.status(401).json({ 
            mensaje: 'No hay token en la peticion' 
        }) 
    }
    try{ 
        const payload = jwt.verify(token, process.env.SECRET_JWT)
        req.nombreUsuario = payload.nombreUsuario; 
    }catch(error){
        console.log(error)
        return res.status(401).json({ 
            mensaje: 'El token no es valido' 
        }) 
    } 
    next(); 
} 

export default validarJWT;