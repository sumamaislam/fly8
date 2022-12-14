// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import {  useSelector } from 'react-redux';

const calculateOrderAmount = (items) => {
  const total = items * 100
  return total;
};

const MyComponent = () => {
  const totalPrice = useSelector(state => state.product.totalPrice);

  return {totalPrice}
};

// const {totalPrice} = useSelector(state => state.product);
export default async function handler(req, res) {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    // amount: calculateOrderAmount(items),
    // amount: calculateOrderAmount(items),
    amount: calculateOrderAmount(items),
    // amount: 100,
    currency: "usd",
    payment_method_types: ['card'],
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};