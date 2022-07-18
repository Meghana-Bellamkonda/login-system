const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  }
});

const StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;