// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { useSelector } from 'react-redux';

// const {totalPrice} = useSelector(state=>state.product)
const calculateOrderAmount = (items) => {
  const totalPrice = items * 100
  return totalPrice;
};

const MyComponent = () => {
  const totalPrice = useSelector(state => state.product.totalPrice);

  return {totalPrice}
};

console.log("Please",MyComponent)
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