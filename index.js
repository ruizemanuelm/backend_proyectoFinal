import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config"
import "./src/database/dbConnection"
import usuariosRoutes from "./src/routes/usuarios.routes"
import turnosRouter from './src/routes/turnos.routes'
import pacientesRouter from './src/routes/pacientes.routes'
import comentariosRouter from './src/routes/comentarios.routes'

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("estoy en el puerto " + app.get("port"));
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")));


//rutas
app.use('/apihuellitas', usuariosRoutes);
app.use('/apihuellitas', turnosRouter)
app.use('/apihuellitas', pacientesRouter)
app.use('/apihuellitas', comentariosRouter)
