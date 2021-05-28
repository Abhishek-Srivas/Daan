var mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
    email : {
        type: String
    },
    otp : {
        type: String
    },
    createdAt: { type: Date, expires: "10m", default: Date.now },
});
// OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds:180 });

module.exports = mongoose.model("Otp", OtpSchema);