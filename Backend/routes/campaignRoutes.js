//import all required packages here
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/isAuth");
const campaignController = require("../controller/campaignController");

router
  .route("/create-campaign")
  .post(authMiddleware.validateNgo, campaignController.createCampaign);

router
  .route("/campaign")
  .get(campaignController.getCampaigns)

router
  .route("/get-campaign")
  .get(authMiddleware.validateNgo,campaignController.getNgoCampaign)

router
  .route("/delete")
  .delete(authMiddleware.validateNgo,campaignController.delete);
// router
//   .route("/certificate")
//   .get(campaignController.createCertificate);

module.exports = router;