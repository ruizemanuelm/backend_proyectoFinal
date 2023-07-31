import { Schema, model } from 'mongoose'

const turnoSchema = new Schema({
    fechaTurno: {
        type: Date,
        required: true,
        validate: {
          validator: function (value) {
            return value >= new Date();
          },
          message: 'La fecha debe ser una fecha actual o futura',
        },
      },
      nombMascota: {
        type: String,
        minLength: 2,
        maxLength: 15,
        required: true,
      },
      hora: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
        validate: {
          validator: function (hora) {
            const horaMin = "08:00";
            const horaMaxManana = "12:00";
            const horaMinTarde = "14:00";
            const horaMax = "18:00";
    
            return (
              (hora >= horaMin && hora <= horaMaxManana) ||
              (hora >= horaMinTarde && hora <= horaMax)
            );
          },
          message: "La hora debe estar entre 08:00 y 12:00 o entre 14:00 y 18:00.",
        },
      },
    veterinario: {
      type: String,
      required: true,
    },
    detalleCita: {
      type: String,
      minLength: 10,
      maxLength: 100,
      required: true,
    },
  });
  
  const Turno = model("turno", turnoSchema);
  
  export default Turno;