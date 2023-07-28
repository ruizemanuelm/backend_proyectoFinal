import Paciente from "../models/pacientes";

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los pacientes",
    });
  }
};

export const obtenerPacientePorId = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id );
    res.status(200).json(paciente);
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

export const borrarPaciente = async (req, res) => {
  try {
    console.log(req.params.id);
    await Paciente.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Los datos del paciente fueron eliminados correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo eliminar los datos del paciente",
    });
  }
};

export const editarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Los datos del paciente fueron modificados correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo modificar los datos del paciente",
    });
  }
};
