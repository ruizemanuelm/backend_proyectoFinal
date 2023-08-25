import generarJWT from "../helpers/token-sign";
import Usuario from "../models/usuarios";
import bcrypt from 'bcrypt';

export const loguearUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findOne({ email: req.body.email });
        if (!usuarios) {
            return res.status(400).json({
                message: 'Email incorrecto'
            });
        }
        const passwordValido = await bcrypt.compare(req.body.password, usuarios.password)
        if (!passwordValido) {
            return res.status(400).json({
                message: 'Password incorrecta'
            });}

            const token = await generarJWT(usuarios.nombreUsuario, usuarios.email);

            res.status(200).json({
                mensaje:'El usuario existe',
                nombreUsuario: usuarios.nombreUsuario,
                email: usuarios.email,
                rol: usuarios.rol,
                token

            })
        
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