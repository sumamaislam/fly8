import React from "react";
import { useState } from "react";
import { Footer, Header } from "../../components/common";
import { Email } from "../../components/Home";
import Account from "../../components/Profile/Account";
import Form from "../../components/Profile/Form";
import PaymentCard from "../../components/Profile/PaymentCard";
import Subscription from "../../components/Profile/Subscription";
import User from "../../components/Profile/User";
import { footerDataRequest, navDataRequest } from "../../redux/home";
import { wrapper } from "../../store";
import { getSession } from "next-auth/react";

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


export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const session = await getSession({ req: context.req });
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());
  if (session) {
    return {
      props: {
        session,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }
});
