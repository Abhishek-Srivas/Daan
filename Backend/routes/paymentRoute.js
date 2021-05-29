require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const mongoose = require('mongoose');

const router = express.Router();
const MoneyDonate = require("../model/moneyDonate");
const Campaign = require("../model/campaignModel");
const PaymentDetailsSchema = mongoose.Schema({
    razorpayDetails: {
        orderId: String,
        paymentId: String,
        signature: String,
    },
    success: Boolean,
});

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");
const { nextTick } = require('process');

pathToAttachment = `${__dirname}/attachment.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");

const PaymentDetails = mongoose.model('PatmentDetail', PaymentDetailsSchema);

router.post('/orders', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID, // YOUR RAZORPAY KEY
            key_secret: process.env.RAZORPAY_SECRET, // YOUR RAZORPAY SECRET
        });

        const options = {
            amount: req.body.amount * 100,
            currency: 'INR',
            receipt: 'receipt_order_74394',
        };
        console.log(req.body);

        const order = await instance.orders.create(options);
        
        if (!order) return res.status(500).send('Some error occured');
       

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/success', async (req, res) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            id,
            amount,
            name,
            email
        } = req.body;

        const shasum = crypto.createHmac('sha256', process.env.REACT_APP_RAZORPAY_KEY_SECRET);
        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        const digest = shasum.digest('hex');

        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: 'Transaction not legit!' });

        const newPayment = PaymentDetails({
            razorpayDetails: {
                orderId: razorpayOrderId,
                paymentId: razorpayPaymentId,
                signature: razorpaySignature,
            },
            success: true,
        });

        await newPayment.save();
        const campaign = await Campaign.findById(id);
        const raise = campaign.amountRaised + Number(amount);
        campaign.amountRaised = raise;
        await campaign.save();
        const msg = {
            to: email,
            from: process.env.Email,
            subject: 'Thank You for donation',
            text: 'Thank you for donating through our website',
            attachments: [
              {
                content: attachment,
                filename: "attachment.pdf",
                type: "application/pdf",
                disposition: "attachment"
              }
            ]
          };
          sgMail.send(msg).catch(err => {
            res.json(err)
          });

        res.json({
            msg: 'success',
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/send', async (req,res) =>{
    try {
        const msg = {
            to: req.body.email,
            from: process.env.Email,
            subject: 'Thank You for donation',
            text: 'Thank you for donating through our website',
            attachments: [
              {
                content: attachment,
                filename: "attachment.pdf",
                type: "application/pdf",
                disposition: "attachment"
              }
            ]
          };
          sgMail.send(msg).catch(err => {
            res.json(err)
          });
          res.json({
              success : true
          })

    } catch (error) {
        nextTick(error);
    }
})
module.exports = router;