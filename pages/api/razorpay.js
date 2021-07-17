const Razorpay = require("razorpay");
const shortid = require("shortid");

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async function helper(req, res) {
  const payment_capture = 1,
    amount = req.body.amount,
    currency = "INR";

  // console.log();

  const options = {
    amount: (15 * 100).toString(),
    currency,
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json({
      id: response.id,
      amount: response.amount,
      currency: response.currency,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
}
