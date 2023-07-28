import { Schema,model } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
    type:String,
    required:true,
    minLength:2,
    maxLength:100,
    unique:true
    },
    password:{
    type:String,
    required:true,
    minLength:8,
    maxLength:16,
    validate:{
        validator:function (value) {
            return /^(?=.[A-Z])(?=.[a-z])(?=.*[0-9]).{8,}$/.test(value)
        },
        message: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número. Además, la longitud máxima es de 16 caracteres.'
    }
    },
    email:{
    type:String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'correo electronico invalido.'
    }
    }
})

const Usuario = model("Usuario",usuarioSchema)
export default Usuario;