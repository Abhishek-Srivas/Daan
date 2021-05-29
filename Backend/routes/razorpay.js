/* eslint-disable camelcase */
require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const Order = require('../model/order');

const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.REACT_APP_RAZORPAY_KEY_ID,
  key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
});

router.post('/api/razorpay', async (req, res) => {
  try {
    const { amount } = req.body;
    const preOrder = {
      amount,
      currency: 'INR',
      receipt: 'R #11',
      payment_capture: 1,
      notes: [],
    };
    const response = await instance.orders.create(preOrder);
    await Order.create(response); // optional
    res.status(201).send(response);
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;