import Usuario from "../models/usuario";

export const loguearUsuario = async(req,res) =>{
    try {
        const usuarios = nuevoUsuario.find()
        usuarios.array.forEach(usuario => {
            if(usuario.email===req.body.email){
                if(usuario.password===req.body.password){
                    return res.status(202).json({
                        message:'usuario logueado'
                    })
                }
                res.status(400).json({
                    message:'password incorrecta'
                })
            }
                res.status(400).json({
                    message:'email incorrecto'
                })

        });
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const crearUsuario = async(req,res) =>{
    try {
       const nuevoUsuario = new Usuario(req.body)
       await nuevoUsuario.save()
       res.status(201).json({mensaje:"Se creo un nuevo usuario"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}