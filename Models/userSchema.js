// mongoose
const mongoose = require("mongoose");

// import validator
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,

    validator: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  image: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
