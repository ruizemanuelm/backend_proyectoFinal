import Turno from "../models/turnos";

export const obtenerTurnos = async (req,res)=>{
    try {
        const turnos = await Turno.find()
        res.status(200).json(turnos)
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'error al buscar los turnos'})
    }
}
export const crearTurno = async(req,res) =>{
    try {
       const nuevoTurno = new Turno(req.body)
       await nuevoTurno.save()
       res.status(201).json({mensaje:"Se creo un nuevo turno"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}
export const borrarTurno = async (req, res) => {
    try {
      console.log(req.params.id);
      await Turno.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "El turno fue eliminado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "No se pudo eliminar el turno",
      });
    }
  };
  
