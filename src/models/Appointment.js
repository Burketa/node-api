const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Appointment", AppointmentSchema);
