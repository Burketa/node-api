const mongoose = require("mongoose");
const Appointment = mongoose.model("Appointment");

module.exports = {
  async index(req, res) {
    const appointments = await Appointment.find();

    return res.json(appointments);
  },

  async store(req, res) {
    const appointment = await Appointment.create(req.body);
    return res.json(appointment);
  }
};
