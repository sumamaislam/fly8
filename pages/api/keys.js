// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      publishedKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    })
  } else {
    res.status(405).end("Methos not allowed")
  }
};