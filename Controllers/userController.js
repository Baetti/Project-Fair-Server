// import user model
const users = require("../Models/userSchema");

// register
exports.register = async (req, res) => {
  console.log("Inside Register function");
  const { username, email, password } = req.body;
  console.log(`username:${username},email:${email},password:${password}`);

  try {
    // check already existing user - findOne()
    const existingUser = await users.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      res.status(406).json("User Already Exist...Please Login!!!");
    } else {
      // register user
      const newUser = new users({
        username,
        email,
        password,
        image: "",
        github: "",
        linkedin: "",
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`Error!!! Transaction Failed: ${err}`);
  }
};

// login

exports.login = async (req, res) => {
  console.log("Inside login function");
  const { email, password } = req.body;
  try {
    //  check user exist or not
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {
      res.status(200).json({ existingUser });
    } else {
      res.status(404).json("Incorrect Email / Password");
    }
  } catch {
    res.status(401).json(`Error!!! Transaction Failed: ${err}`);
  }
};
