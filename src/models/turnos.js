import { Schema, model } from 'mongoose'

const turnoSchema = new Schema({
    fechaTurno: {
        type: Date,
        required: true,
        validate: {
          validator: function (value) {
            return value >= new Date();
          },
          message: 'La fecha de nacimiento debe ser una fecha actual o futura',
        },
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