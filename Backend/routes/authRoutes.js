//import all required packages here
const express = require("express");
const router = express.Router();

//importing controllers 
const authController = require("../controller/authController");
const authMiddleware = require("../middleware/isAuth");
router
  .route("/signup")
  .post(authController.signup)

router
  .route("/otp-verify")
  .post(authController.otpVerification)

router
  .route("/login")
  .post(authController.login)
  .get(authMiddleware.validateNgo,authController.isAuthCheck)

router
  .route("/edit-details")
  .put(authMiddleware.validateNgo,authController.editDetails)
module.exports = router;