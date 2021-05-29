const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors")
const errorHandler = require("./error/handleError");
const PORT = process.env.PORT || 8080;

const app = express();
dotenv.config();

//import routes
const authRoutes = require("./routes/authRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const orderRoutes = require('./routes/order');
const razorpayRoutes = require('./routes/razorpay');
const paymentRoutes = require('./routes/payment');

//To remove CROS (cross-resource-origin-platform) problem
app.use((req, res, next) =>{   
    res.setHeader('Access-Control-Allow-Origin',"*"); // to allow all client we use *
    res.setHeader('Access-Control-Allow-Methods',"OPTIONS,GET,POST,PUT,PATCH,DELETE"); //these are the allowed methods 
    res.setHeader('Access-Control-Allow-Headers', "*"); // allowed headers (Auth for extra data related to authoriaztiom)
    next();
  });

//call middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);
app.use(campaignRoutes);
app.use(orderRoutes);
app.use(razorpayRoutes);
app.use(paymentRoutes);
// OK route.
app.get("/", (_req, res) => {
    res.send("OK");
});

// 404 route.
app.use("*", (_req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
});
app.use(errorHandler);

mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        app.listen(PORT);
        console.log("server started");
    })
    .catch((err) => {
        console.log(err);
    });