import React from "react";
import { useState } from "react";
import { Footer, Header } from "../../components/common";
import { Email } from "../../components/Home";
import Account from "../../components/Profile/Account";
import Form from "../../components/Profile/Form";
import Login from "../../components/profile/Login";
import PaymentCard from "../../components/Profile/PaymentCard";
import Subscription from "../../components/Profile/Subscription";
import User from "../../components/Profile/User";

function Profile() {
  const [show, setShow] = useState("orders");
  return (
    <div>
        <Header />
        <Account show={show} setShow={setShow} />
        {show === "address" && <Form />}
        {show === "account" && <User/>}
        {show === "payment" &&<PaymentCard />}
        {show === "subscription" && <Subscription />}
        <Email />
        <Footer />
    </div>
  );
}

export default Profile;
