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
        type: Date,
        required: true,
        validate: {
          validator: function (value) {
            const currentTime = new Date();
            const selectedTime = new Date(currentTime);
            selectedTime.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
            return selectedTime >= currentTime;
          },
          message: 'La hora de la cita debe ser una hora actual o futura',
        },
      },
    veterinario: {
      type: String,
      enum: ['Veterinario', 'Veterinaria'],
      required: true,
    },
    detalleCita: {
      type: String,
      minLength: 2,
      maxLength: 400,
      required: true,
    },
  });
  
  const Turno = model("turno", turnoSchema);
  
  export default Turno;