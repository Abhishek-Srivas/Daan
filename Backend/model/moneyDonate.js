var mongoose = require('mongoose');

const moneyDonateSchema = new mongoose.Schema({
    amount : {
        type : Number,
    },
    name : {
        type : String,
    },
    email : {
        type : String
    },
    ngo :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "NGO"
    }
});

module.exports = mongoose.model("MoneyDonate", moneyDonateSchema);