var mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    amount : {
        type : String,
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("Volunteer",volunteerSchema);