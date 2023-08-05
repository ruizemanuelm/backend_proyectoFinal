import { validationResult } from "express-validator";
import Turno from "../models/turnos";

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.status(200).json(turnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "error al buscar los turnos" });
  }
};

export const obtenerTurnoPorId = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id);
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar el turno",
    });
  }
};

export const crearTurno = async (req, res) => {
  const nuevoTurno = req.body;

  try {
    const turnoExistente = await Turno.findOne({
      fechaTurno: nuevoTurno.fechaTurno,
      hora: nuevoTurno.hora,
      veterinario: nuevoTurno.veterinario,
    });
    if (turnoExistente) {
      return res.status(409).json({
        error: "Turno existente",
        message:
          "Ya existe un turno para esa fecha y hora con el mismo veterinario",
      });
    }
    const creado = await Turno.create(nuevoTurno);
    return res
      .status(201)
      .json({ message: "el turno fue creado correctamente", });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error en el servidor",
      message:
        "El turno no pudo ser solicitado, intente nuevamente en unos minutos",
    });
  }
};

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

export const editarTurno = async (req, res) => {
  const turnoId = req.params.id;
  const datosTurnoActualizados = req.body;

  try {
    const turnoExistente = await Turno.findOne({
      fechaTurno: datosTurnoActualizados.fechaTurno,
      hora: datosTurnoActualizados.hora,
      veterinario: datosTurnoActualizados.veterinario,
      _id: { $ne: turnoId },
    });

    if (turnoExistente) {
      return res.status(409).json({
        error: 'Turno existente',
        message: 'Ya existe un turno para esa fecha y hora con el mismo veterinario',
      });
    }

    await Turno.findByIdAndUpdate(turnoId, datosTurnoActualizados);
    return res.status(200).json({
      mensaje: 'Los datos del turno fueron modificados correctamente',
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      mensaje: 'No se pudo modificar los datos del turno',
    });
  }
};
