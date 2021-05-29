const dotenv = require("dotenv");
dotenv.config();

api_key = process.env.STRIPE_API_KEY_SECRET;
const stripe = require("stripe")(api_key.stripePayment);

exports.stripePayment = (req, res) => {
  let { amount, email, campingId } = req.body;
  console.log(amount, id);

  stripe.paymentIntents
    .create({
      amount: amount,
      currency: "inr",
      description: "Payment for campaing",
      payment_method: id,
      confirm: true,
    })
    .then((response) => {
      console.log(response);
      res.status(200).json({
        message: "payment successful",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Payment Failed",
        success: false,
      });
    });
};
