var mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    category : {
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    photo :{
        type : String,
    },
    goal : {
        type : Number,
        required : true
    },
    amountRaised : {
        type : Number,
        default : 0
    },
    ngo :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "NGO"
    }
});

module.exports = mongoose.model("Campaign", CampaignSchema);