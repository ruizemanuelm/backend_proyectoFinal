import { Schema, model } from 'mongoose'


const ComentarioSchema = new Schema({
    nombre: {
      type: String,
      required: true,
    },
    contenidoComentario: {
      type: String,
      required: true,
    },
    evaluacion: {
      type: String,
      required: true,
    },
  });
  
  const Comentario = model("comentario", ComentarioSchema);
  
  export default Comentario;