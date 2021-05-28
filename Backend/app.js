const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors")
const errorHandler = require("./error/handleError");
const PORT = process.env.PORT || 3000;

const app = express();
dotenv.config();

//import routes
const authRoutes = require("./routes/authRoutes");

//call middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);
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