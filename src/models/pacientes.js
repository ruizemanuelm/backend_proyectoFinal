import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
    nombre: {
      type: String,
      minLength: 2,
      maxLength: 100,
      required: true,
      unique: true,
    },
    apellido: {
      type: String,
      minLength: 2,
      maxLength: 100,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return /^[\w-]+(\.[\w-]+)*@([A-Za-z0-9-]+\.)*[A-Za-z0-9-]+(\.[A-Za-z]{2,})$/.test(
              value
            );
          },
          message: "Correo electrónico inválido",
        },
      },
      telefono: {
        type: Number,
        required: true,
        validate: {
          validator: function (value) {
            return /^\d{10}$/.test(value);
          },
          message: 'El número de teléfono debe contener 10 dígitos',
        },
      },
    direccion: {
      type: String,
      minLength: 2,
      maxLength: 100,
      required: true,
    },
    mascota: {
      type: String,
      minLength: 2,
      maxLength: 100,
      required: true,
    }
});
  
  const Paciente = model("paciente", pacienteSchema);
  
  export default Paciente;