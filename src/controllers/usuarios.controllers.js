import Usuario from "../models/usuarios";
import bcrypt from 'bcrypt';

export const loguearUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.find({ email: req.body.email });
        if (usuarios.length === 0) {
            return res.status(400).json({
                message: 'Email incorrecto'
            });
        }
        const usuario = usuarios[0];
        if (usuario.password === req.body.password) {
            return res.status(202).json({
                message: 'Usuario logueado',
                nombreUsuario: usuario.nombreUsuario,
                email: usuario.email,
                password: usuario.password
            });
        } else {
            return res.status(400).json({
                message: 'Password incorrecta'
            });
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const crearUsuario = async(req,res) =>{
    try { 
        let consultarUsuario = await Usuario.findOne({email: req.body.email});
        if(consultarUsuario){
            return res.status(400).json({mensaje: 'ya existe un usuario con el correo enviado'})
        }

        const nuevoUsuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync(10)
        nuevoUsuario.password = bcrypt.hashSync(nuevoUsuario.password, salt);
        await nuevoUsuario.save()
        return res.status(201).json({mensaje:"Se creo un nuevo usuario"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const obtenerUsuarios = async(req,res) =>{
    try {
        const usuarios = await Usuario.find()
        return res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json(error)
    }
}


export const obtenerUnUsuario = async(req,res) =>{
    try {
        const usuarios = await Usuario.findById(req.params.id)
        return res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json({mensaje:"Error al buscar el usuario"})
    }
}