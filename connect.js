const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to mongodb");
  } catch (err) {
    throw err;
    process.exit();
  }
};

module.exports = connectDb;
