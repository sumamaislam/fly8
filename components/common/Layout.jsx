import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

const Layout = ({ children }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice ,coupanData } = useSelector((state) => state.product);

  const price =
    (coupanData?.type === "1" && totalPrice - coupanData?.price) ||
    (coupanData?.type === "0" &&
      totalPrice - (totalPrice / 100) * coupanData?.price) || totalPrice;

  console.log("price",price)
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          {children}
        </Elements>
      )}
    </div>
  );
};

export default Layout;
