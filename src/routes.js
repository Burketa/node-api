//Importações
const express = require("express");
const routes = express.Router();

const CompanyNameController = require("./controllers/CompanyNameController");

//Rotas
routes.get("/names", CompanyNameController.showAll);
routes.post("/names", CompanyNameController.create);
routes.get("/names/:id", CompanyNameController.read);
routes.put("/names/:id", CompanyNameController.update);
routes.delete("/names/:id", CompanyNameController.delete);

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
