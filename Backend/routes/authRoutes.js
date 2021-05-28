//import all required packages here
const express = require("express");
const router = express.Router();

//importing controllers 
const authController = require("../controller/authController");

router
  .route("/signup")
  .post(authController.signup);

router
  .route("/otp-verify")
  .post(authController.otpVerification);

module.exports = router;