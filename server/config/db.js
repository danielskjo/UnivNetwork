const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
