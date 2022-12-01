import React, { useState } from "react";
import { Footer, Header } from "../../components/common";
import Discount from "../../components/Home/checkout/Discount";
import Information from "../../components/Home/checkout/Information";
import Payment from "../../components/Home/checkout/Payment";
import Shipping from "../../components/Home/checkout/Shipping";

function index() {
  // const [show ,setShow] = useState("information")
  const [show, setShow] = useState("information");
  return (
    <div>
      <Header />

      {show === "information" && <Information setShow={setShow} />}
      {show === "shipping" && <Shipping setShow={setShow} />}
      {show === "payment" && <Payment setShow={setShow}/>}

      <Footer />
    </div>
  );
}

export default index;
