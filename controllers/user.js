const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");
const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      year: req.body.year,
      dept: req.body.dept,
      rollNumber: req.body.rollNumber,
      password: hash,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(CreateError(404, "user not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(CreateError(400, "password doesnt match"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc; //without _doc check the output its inside this
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails, token });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
