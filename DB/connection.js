// import mongoose
const mongoose = require("mongoose");

// get connection string from process env variable
const connectionString = process.env.DATABASE;

// connnect node app with mongodb using mongoose
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Atlas Connected successfully with pfServer");
  })
  .catch((err) => {
    console.log("MongoDB Connection failed:" + err);
  });
