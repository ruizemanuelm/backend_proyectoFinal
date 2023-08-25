import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
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
  },  rol: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(value);
      },
      message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número',
    },
  },
});

const Usuario = model("usuarios", usuarioSchema);

export default Usuario;
