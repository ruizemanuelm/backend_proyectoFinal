import Paciente from "../models/pacientes";

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar al paciente",
    });
  }
};

export const crearPacientes = async (req, res) => {
  try {
    // console.log(req.body)
    const pacienteNuevo = new Paciente(req.body);
    await pacienteNuevo.save();
    res.status(201).json({
      mensaje: "Se dio de alta al paciente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear paciente",
    });
  }
};
