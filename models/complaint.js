const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ComplaintSchema = mongoose.Schema(
  {
    complaint: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comp = mongoose.model("comp", ComplaintSchema);
module.exports = Comp;
