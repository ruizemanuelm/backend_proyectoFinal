import { Schema, model } from 'mongoose'


const ComentarioSchema = new Schema({
    contenidoComentario: {
      type: String,
      required: true,
    }
  });
  
  const Comentario = model("comentario", ComentarioSchema);
  
  export default Comentario;