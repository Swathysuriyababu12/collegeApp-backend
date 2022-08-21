const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const lostSchema = mongoose.Schema(
  {
    item: { type: String, required: true },
    itemDesc: { type: String, required: true },
    place: { type: String, required: true },
    contact: { type: String, required: true },
    pic: { type: String, default: "./images/user.png" },
  },
  {
    timestamps: true,
  }
);

const Lost = mongoose.model("Lost", lostSchema);
module.exports = Lost;
