//Importações
const express = require("express");
const mongoose = require("mongoose");

//Url de conexão com o banco
const connectionString =
  "mongodb+srv://burca:burca@cluster0-qxdbz.mongodb.net/nodedb?retryWrites=true&w=majority";

//Iniciando o App
const app = express();
app.use(express.json());

//Faz a conexão com o bd
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Importa os models nescessários
require("./src/models/Appointment");

//Rotas
app.use("/api", require("./src/routes"));

//Escuta as requisições
app.listen(3001);
