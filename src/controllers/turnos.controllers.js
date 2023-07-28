import Turno from "../models/turnos";

export const obtenerProductos = async (req,res)=>{
    try {
        const turnos = await Turno.find()
        res.status(200).json(turnos)
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'error al buscar los turnos'})
    }
}