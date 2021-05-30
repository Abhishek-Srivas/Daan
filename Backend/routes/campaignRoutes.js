//import all required packages here
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/isAuth");
const campaignController = require("../controller/campaignController");
const multer = require("multer");

//function to store the images
const storage = multer.diskStorage({
  destination: (req,file, cb)=>{  //choose the destination for storing images
      cb(null,"./uploads/");
  },
  filename: (req,file,cb)=>{      //set filename as originalfilename 
      cb(null, file.originalname)
  }
})

//function to filter the image and vedio type
const fileFilter = (req,file,cb)=>{
  if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype==="image/jpg" ){
      cb(null,true);
  } else{
      cb(null,false)
  }
}
//to handle multiple files of data
const imp = multer({storage:storage ,fileFilter:fileFilter}).single("image")

router
  .route("/create-campaign")
  .post(authMiddleware.validateNgo,[imp], campaignController.createCampaign);

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