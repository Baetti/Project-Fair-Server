// import express
const express = require("express");

// import userController js file
const userController = require("../Controllers/userController");

// create router for express app using Router()
const router = new express.Router();

// define different routes of server app
// register
router.post("/user/register", userController.register);

// login
router.post("/user/login", userController.login);

// export router
module.exports = router;
