//import all required packages here
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/isAuth");
const campaignController = require("../controller/campaignController");

router
  .route("/create-campaign")
  .post(authMiddleware.validateNgo,authController.login);

module.exports = router;