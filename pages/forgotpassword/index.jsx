import React from "react";
import { Footer, Header } from "../../components/common";
import { wrapper } from "../../store";
import { footerDataRequest, navDataRequest } from "../../redux/home";
import ForgotPassword from "../../components/auth/forgot";
import { Email } from "../../components/Home";

function Forgot() {
  return (
    <div>
      <Header />
      <ForgotPassword />
      <Email />
      <Footer />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());
});

export default Forgot;
