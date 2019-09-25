const express = require("express");
const mongoose = require("mongoose");

//Iniciando o App
const app = express();

mongoose.connect(
  "mongodb+srv://burca:burca@cluster0-qxdbz.mongodb.net/nodedb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
require("./src/models/Appointment");

const Appointment = mongoose.model("Appointment");

app.get("/", (req, res) => {
  Appointment.create({
    clientName: "burca",
    appointmentDate: 1237614,
    description: "teste"
  });

  res.send("burca esteve por aqui, muahaha");
});

app.get("/2", (req, res) => {
  res.send("segunda rota ?");
});

app.listen(3001);
