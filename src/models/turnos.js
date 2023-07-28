import { Schema, model } from 'mongoose'

const turnoSchema = new Schema({
    fechaTurno: {
      type: Date,
      validate: {
        validator: isValidDate,
        message: '{VALUE} no es una fecha válida en formato AAAA-MM-DD'
      },
      required: true,
      unique: true,
    },
    hora: {
      type: Number,
      validate: {
        validator: isValidTime,
        message: '{VALUE} no es una hora válida (debe estar entre 9 y 18).'
      },
      required: true,
    },
    veterinario: {
      type: String,
      enum: ['Veterinario', 'Veterinaria'],
      required: true,
    },
    detalleCita: {
      type: String,
      required: true,
    },
  });
  
  const Turno = model("turno", turnoSchema);
  
  export default Turno;