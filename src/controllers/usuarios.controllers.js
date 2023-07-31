import Usuario from "../models/usuarios";

export const loguearUsuario = async(req,res) =>{
    try {
        const usuarios = await Usuario.find()
        usuarios.forEach(usuario => {
            if(usuario.email===req.body.email){
                if(usuario.password===req.body.password){
                    return res.status(202).json({
                        message:'usuario logueado',
                        nombreUsuario: usuario.nombreUsuario
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
       console.log(req);
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const obtenerUsuarios = async(req,res) =>{
    try {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json(error)
    }
}


export const obtenerUnUsuario = async(req,res) =>{
    try {
        const usuarios = await Usuario.findById(req.params.id)
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json({mensaje:"Error al buscar el usuario"})
    }
}