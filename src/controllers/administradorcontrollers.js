import generarJWT from "../helpers/token-sign";
import Administrador from "../models/administrador";
import bcrypt from 'bcrypt';

export const loguearAdministrador = async (req, res) => {
    try {
        const administrador = await Administrador.findOne({ email: req.body.email });
        if (!administrador) {
            return res.status(400).json({
                message: 'Email incorrecto'
            });
        }
        const passwordValido = await bcrypt.compare(req.body.password, administrador.password)
        if (!passwordValido) {
            return res.status(400).json({
                message: 'Password incorrecta'
            });}

            const token = await generarJWT(administrador.nombreAdministrador, administrador.email);

            res.status(200).json({
                mensaje:'El administrador existe',
                nombreAdministrador: administrador.nombreAdministrador,
                email: administrador.email,
                token

            })
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const crearAdministrador = async(req,res) =>{
    try { 
        const consultarAdministrador = await Administrador.findOne({email: req.body.email});
        if(consultarAdministrador){
            return res.status(400).json({mensaje: 'ya existe un administrador con el correo enviado'})
        }
        
        const nuevoAdministrador = new Administrador(req.body);
        const salt = bcrypt.genSaltSync(10)
        nuevoAdministrador.password = bcrypt.hashSync(nuevoAdministrador.password, salt);
        await nuevoAdministrador.save()
        return res.status(201).json({mensaje:"Se creo un nuevo Administrador"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const obtenerUnAdministrador = async(req,res) =>{
    try {
        const administrador = await Administrador.findById(req.params.id)
        return res.status(200).json(administrador)
    } catch (error) {
        res.status(404).json({mensaje:"Error al buscar el administrador"})
    }
}       

export const obtenerAdministrador = async(req, res ) => {
    try {
        const administrador = await Administrador.find()
        return res.status(200).json(administrador)
    } catch (error) {
        res.status(404).json(error)
        mensaje: 'error al buscar los administradores'
    }
}