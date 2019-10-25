const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CompanyNameSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  }
});

CompanyNameSchema.plugin(mongoosePaginate);

mongoose.model("CompanyName", CompanyNameSchema);
