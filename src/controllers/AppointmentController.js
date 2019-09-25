const mongoose = require("mongoose");
const Appointment = mongoose.model("Appointment");

module.exports = {
  async showAll(req, res) {
    const appointments = await Appointment.find();

    return res.json(appointments);
  },

  async read(req, res) {
    const appointment = await Appointment.findById(req.params.id);

    return res.json(appointment);
  },

  async create(req, res) {
    const appointment = await Appointment.create(req.body);
    return res.json(appointment);
  },

  async update(req, res) {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(appointment);
  },

  async delete(req, res) {
    await Appointment.findByIdAndRemove(req.params.id);

    return res.send();
    //const appointment = await Appointment.create(req.body);
    //return res.json(appointment);
  }
};
