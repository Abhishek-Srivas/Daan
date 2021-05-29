const express = require('express');

const Order = require('../model/order');

const router = express.Router();

router.get('/api/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;