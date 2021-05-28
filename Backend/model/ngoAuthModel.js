var mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    ngoName : {
        type : String
    },
    city : {
        type : String
    },
    name : {
        type : String
    },
    contact : {
        type : Number
    },
    email : {
        type : String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    password : {
        type : String
    }
});

module.exports = mongoose.model("NGO",authSchema);