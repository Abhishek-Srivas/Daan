const express = require('express');

const Payment = require('../model/payment');

const router = express.Router();

router.get('/api/payments', async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
});

router.post('/api/payments', async (req, res) => {
  try {
    await Payment.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;