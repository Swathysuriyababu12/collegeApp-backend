const Lost = require("../models/lostSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");
//const { cloudinary } = require("../models/cloudinary");

const LostDetails = async (req, res, next) => {
  try {
    // const fileStr = req.body.pic;
    // const response = await cloudinary.uploader.upload(fileStr, {
    //   upload_preset: "dev_setups",
    // });
    // console.log(response);
    const lost = new Lost({
      item: req.body.item,
      contact: req.body.contact,
      itemDesc: req.body.itemDesc,
      place: req.body.place,
    });

    await lost.save();
    res.status(200).json(lost);
  } catch (err) {
    next(err);
  }
};
const GetDetails = async (req, res, next) => {
  try {
    const found = await Lost.find();
    res.status(200).json(found);
  } catch (err) {
    next(err);
  }
};

module.exports = { LostDetails, GetDetails };
