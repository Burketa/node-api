//Importações
const express = require("express");
const routes = express.Router();

const AppointmentController = require("./controllers/AppointmentController");

//Rotas
routes.get("/appointments", AppointmentController.index);

routes.get("/2", (req, res) => {
  res.send("segunda rota ?");
});

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
