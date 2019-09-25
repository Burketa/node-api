//Importações
const express = require("express");
const routes = express.Router();

const AppointmentController = require("./controllers/AppointmentController");

//Rotas
routes.get("/appointments", AppointmentController.index);
routes.post("/appointments", AppointmentController.store);

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
