const mongoose = require("mongoose");
const CompanyName = mongoose.model("CompanyName");

module.exports = {
  async showAll(req, res) {
    const { page = 1 } = req.query;
    const comapnyNames = await CompanyName.paginate({}, { page, limit: 10 });

    return res.json(comapnyNames);
  },

  async read(req, res) {
    const comapnyNames = await CompanyName.findById(req.params.id);

    return res.json(comapnyNames);
  },

  async create(req, res) {
    const comapnyNames = await CompanyName.create(req.body);
    return res.json(comapnyNames);
  },

  async update(req, res) {
    const comapnyNames = await CompanyName.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(comapnyNames);
  },

  async delete(req, res) {
    await CompanyName.findByIdAndRemove(req.params.id);

    return res.send();
    //const appointment = await Appointment.create(req.body);
    //return res.json(appointment);
  }
};
