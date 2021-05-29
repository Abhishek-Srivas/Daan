const mongoose = require('mongoose');

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  razorpay_order_id: { type: String },
  razorpay_payment_id: { type: String },
  razorpay_signature: { type: String },
}, { collection: 'payments', timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);