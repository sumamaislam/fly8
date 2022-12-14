import React, { useState } from "react";
import Address from "../../components/Home/checkout/Address";
import Payments from "../../components/Home/checkout/Payments";
import Shippings from "../../components/Home/checkout/Shippings";

function index() {

  const [show, setShow] = useState("address");
  return (
    <div>
      {show === "address" && <Address setShow={setShow} />}
      {show === "shipping" && <Shippings setShow={setShow} />}
      {show === "payment" && <Payments setShow={setShow} />}
    </div>
  );
}

export default index;
