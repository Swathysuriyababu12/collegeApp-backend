const Comp = require("../models/complaint");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");

const PostComplaint = async (req, res, next) => {
  try {
    const comp = new Comp({
      complaint: req.body.complaint,
    });

    await comp.save();
    res.status(200).json(comp);
  } catch (err) {
    next(err);
  }
};
const GetComplaint = async (req, res, next) => {
  try {
    const received = await Comp.find();
    res.status(200).json(received);
  } catch (err) {
    next(err);
  }
};

module.exports = { PostComplaint, GetComplaint };
