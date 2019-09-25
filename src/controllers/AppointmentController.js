const mongoose = require("mongoose");
const Appointment = mongoose.model("Appointment");

module.exports = {
  async index(req, res) {
    const appointments = await Appointment.find();

    return res.json(appointments);
  }
};
