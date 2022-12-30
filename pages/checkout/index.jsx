import React, { useState } from "react";
import Address from "../../components/Home/checkout/Address";
import Payments from "../../components/Home/checkout/Payments";
import Shippings from "../../components/Home/checkout/Shippings";
import { navDataRequest } from "../../redux/home";
import { wrapper } from "../../store";
import Stripe from "stripe";
import Layout from "../../components/common/Layout";

function index() {
  const [show, setShow] = useState("address");
  return (
    <div>
      <Layout>
        {show === "address" && <Address setShow={setShow} />}
        {show === "shipping" && <Shippings setShow={setShow} />}
        {show === "payment" && <Payments setShow={setShow} />}
      </Layout>
    </div>
  );
}

export default index;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
});

// export const getServerSideProps = async () => {
//   await store.dispatch(navDataRequest());
//   const strip = new Stripe(process.env.STRIPE_SECRET_KEY);
//   const paymentIntent = await strip.paymentIntent.create({
//     amount: 1000,
//     currency: "usd"
//   })
//   return{
//     props : {
//       paymentIntent
//     }
//   }
// }
