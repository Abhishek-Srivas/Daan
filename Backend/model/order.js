const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  id: { type: String, required: true },
  entity: { type: String, required: true },
  amount: { type: Number, required: true },
  amount_paid: { type: Number, required: true },
  amount_due: { type: Number, required: true },
  currency: { type: String, required: true },
  receipt: { type: String },
  offer_id: { type: String },
  status: { type: String, required: true },
  attempts: { type: Number, required: true },
  notes: { type: Array },
  created_at: { type: Number, required: true },
}, { collection: 'orders' });

module.exports = mongoose.model('Order', OrderSchema);