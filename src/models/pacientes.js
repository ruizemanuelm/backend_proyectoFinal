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
      minLength: 2,
      maxLength: 100,
      required: true,
    },
    telefono: {
      type: Number,
      minLength: 10,
      maxLength: 100,
      required: true,
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