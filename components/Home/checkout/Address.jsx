import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import InputField from "../../common/inputField";
import Selectoption from "../../common/Selectoption";
// import CountrySelect from "../../common/CountrySelect";
// import StateSelect from "../../common/StateSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import RequestMessage from "../../common/RequestMessage";
import { createOrder, createOrderReal } from "../../../redux/order";
import { baseURL } from "../../../redux/request";
import { toast } from "react-toastify";
import { sentCoupanRequest, setTotalPrice } from "../../../redux/product";
// async function createPaymentIntent(amount, currency) {
//   const stripe = await stripePromise;
//   const { data } = await stripe.createPaymentIntent({
//     amount: amount,
//     currency: currency,
//     payment_method_types: ["card"],
//   });
//   return data.paymentIntent;
// }

function Address({ setShow }) {
  const [input, setInput] = useState({});
  const [formError, setFormError] = useState({});
  const [realPrice, setRealPrice] = useState(0);
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [coupan, setCoupan] = useState("");
  const [publishedKey, setPublishedKey] = useState(null);
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const { totalPrice, carts, totalQuantity, coupanData } = useSelector(
    (state) => state.product
  );
  const { secret } = useSelector((state)=>state.order)
  console.log("important",secret)

  const paymentElementOptions = {
    layout: "tabs",
  };
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    } else {
      validate(input);
    }
  };

  useEffect(() => {
    setRealPrice(totalPrice);
  }, [totalPrice]);

  const iframeStyles = {
    base: {
      color: "#6e6e6e",
      fontSize: "15px",
      // iconColor: "#fff",
      "::placeholder": {
        color: "#737373",
      },
      padding: "4px 10px",
      height: "50px",
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: { ...iframeStyles },
    hidePostalCode: true,
  };
  const handleSub = (e) => {
    e.preventDefault();
    if (coupan.length > 0) {
      console.log(coupan);
      dispatch(sentCoupanRequest(coupan));
      setCoupan("");
    }
  };

  useEffect(() => {
    if (coupanData?.type === "0") {
      setRealPrice(totalPrice - (totalPrice / 100) * coupanData?.price);
    }
    if (coupanData?.type === "1") {
      setRealPrice(totalPrice - coupanData?.price);
    }
  }, [coupanData, totalPrice]);

  useEffect(() => {
    if (coupan) {
      setInput({ ...input, coupan: coupan });
    }
  }, [coupan]);

  const validate = async (data) => {
    const error = {};
    let emailVal =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!data.email) {
      error.email = "Email is required";
    } else if (!data.email.match(emailVal)) {
      error.email = "Invalid Email";
    }

    if (!data.first_name) {
      error.first_name = "Enter a first name";
    }
    if (!data.last_name) {
      error.last_name = "Enter a last name";
    }
    if (!data.country) {
      error.country = "Enter a country";
    }
    if (!data.city) {
      error.city = "Enter a city";
    }
    if (!data.state) {
      error.state = "Select a state";
    }
    if (!data.zip_code) {
      error.zip_code = "Enter a PIN code";
    }
    if (!data.phone_no) {
      error.phone_no = "Enter a phone number to use this delivery method";
    }
    if (!data.address) {
      error.address = "select delivery method";
    }
    if (Object.keys(error).length > 0) {
      setFormError(error);
      console.log(formError);
    } else {
      let cartArray = carts?.map((item) => ({
        id: item.id,
        qty: item.qty,
        size: "",
        size_qty: "",
        size_key: 0,
        size_price: "",
        color: "",
        keys: "",
        values: "",
        prices: item.price,
      }));
      const abcd = {
        _token: "Xi9Cvk89jQZJHJ7R4Aem9hsPoLey21B6uSonaUZi",
        personal_name: data.first_name + " " + data.last_name,
        personal_email: data.email,
        personal_pass: null,
        personal_confirm: null,
        shipping: null,
        pickup_location: null,
        name: data.first_name + " " + data.last_name,
        phone: data.phone_no,
        email: data.email,
        address: data.address,
        customer_country: data.country,
        state: data.state,
        city: data.city,
        zip: data.zip_code,
        shipping_name: null,
        shipping_email: null,
        shipping_phone: null,
        shipping_address: null,
        shipping_country: null,
        shipping_city: null,
        shipping_state: null,
        shipping_zip: null,
        order_notes: null,
        method: "Stripe",
        cardNumber: "4000 0566 5566 5556",
        cardCVC: "123",
        month: "12",
        year: "24",
        shipping_cost: "0",
        packing_cost: "0",
        shipping_title: "Free Shipping",
        packing_title: "Default Packaging",
        dp: "0",
        tax: "0",
        totalQty: totalQuantity,
        vendor_shipping_id: "0",
        vendor_packing_id: "0",
        total:
          (coupanData?.type === "1" && totalPrice - coupanData?.price) ||
          (coupanData?.type === "0" &&
            totalPrice - (totalPrice / 100) * coupanData?.price),
        wallet_price: "0",
        coupon_code: coupanData?.code || null,
        coupon_discount:
          (coupanData?.type === "1" && coupanData?.price) ||
          (coupanData?.type === "0" &&
            (totalPrice / 100) * coupanData?.price) ||
          null,
        coupon_id: coupanData?.id || null,
        user_id: null,
        txn_stripe: "hwhdfcgiufyoihedf8e6wr7yhekuh89743986y8oh",
        currency_code: "USD",
        items: cartArray,
      };
      try {
        dispatch(createOrder(abcd));
        const cardElement = elements.getElement("card");
        console.log("please",cardElement)
        const billingDetails = {
          name: abcd?.name,
          email: abcd?.email,
          address: {
            city: abcd?.city,
            line1: abcd?.shipping_address,
            state: abcd?.state,
            postal_code: abcd?.zip,
          },
        };
        // const paymentMethodReq = await stripe.createPaymentMethod({
        //   type: "card",
        //   card: cardElement,
        //   billing_details: billingDetails,
        // });
        // if (paymentMethodReq.error) {
        //   setCheckoutError(paymentMethodReq.error.message);
        //   setProcessingTo(false);
        //   return;
        // }
        // const { error } = await stripe.confirmCardPayment(secret, {
        //   payment_method: paymentMethodReq.paymentMethod.id,
        // });
        // const { error } = await stripe.confirmPayment({
        //   elements,
        //   confirmParams: {
        //     return_url: "http://localhost:30"
        //   },
        //   // payment_method: paymentMethodReq.paymentMethod.id,
        // });
        // if (error.type === "card_error" || error.type === "validation_error") {
        //   setMessage(error.message);
        // } else {
        //   setMessage("An unexpected error occurred.");
        // }
        // if (!error) {
        //   dispatch(createOrderReal(data));
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  // const handleCountryChange = (val) => {
  //   setInput({ ...input, country: val });
  // };

  // const handleStateChange = (val) => {
  //   setInput({ ...input, state: val });
  // };

  return (
    <div>
      <div className="2xl:w-[75%] w-[90%] m-auto">
        {/* logo */}
        <div>
          <Link href="/">
            <img
              className="w-[100px] pt-[20px]"
              src="/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        {/* Breadcrumb */}
        <div>
          <nav className="flex mt-[20px]  " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Cart
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    onClick={() => setShow("address")}
                  >
                    Information
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    onClick={() => setShow("shipping")}
                  >
                    Shipping
                  </Link>
                </div>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link href="#">
                    <span
                      className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 "
                      onClick={() => setShow("payment")}
                    >
                      Payment
                    </span>
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="font-semibold text-[22px] mt-[25px]">
          <p>Information</p>
        </div>
        <div className="mt-[20px] border-black border flex gap-[20px]">
          {/* left side */}
          <div className="p-4 md:p-10 w-full">
            <div className="">
              <p className="text-[20px] font-bold">Contact Information</p>
              <p className="mt-[16px] text-[12px]">
                Already have an account?{" "}
                <Link href="/" className="text-[#2D80CD]">
                  Login For Checkout
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <InputField
                  placeholder="Email"
                  type="email"
                  className="w-full py-[10px] mt-[10px] border  border-gray-700 rounded-md p-2 outline-none"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                <div className="mt-[10px] text-[12px] text-[#2D80CD] flex items-center gap-2">
                  <div>
                    <input className="mt-1" type="checkbox" name="" id="" />
                  </div>
                  <p>Email me with new offers and exclusive discounts.!</p>
                </div>
                <p className="text-[20px] mt-[1rem] font-bold">
                  Shipping Address
                </p>

                <div className="flex  justify-between gap-4">
                  <div className="w-full">
                    <InputField
                      placeholder="First Name"
                      className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                      name="first_name"
                      value={input.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-[100%]">
                    <InputField
                      placeholder="Last Name"
                      className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                      name="last_name"
                      value={input.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <InputField
                  placeholder="Company (optional)"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                  name="company"
                  value={input.company}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Street Address"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                  name="address"
                  value={input.address}
                  onChange={handleChange}
                />

                <div className="flex  justify-between gap-4">
                  <div className="w-[100%]">
                    <Selectoption
                      className="w-full  mt-[10px] border  border-gray-700 rounded-md p-2"
                      name="country"
                      value={input.country || ""}
                      onChange={handleChange}
                    />
                    {/* <CountrySelect
                      name="country"
                      label="Country/region"
                      value={input.country || ""}
                      onChange={handleCountryChange}
                    /> */}
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="Zip Code"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                      name="zip_code"
                      value={input.zip_code}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="State"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                      name="state"
                      value={input.state}
                      onChange={handleChange}
                    />
                    {/* <StateSelect
                      blankOptionLabel="State"
                      defaultOptionLabel="Select State"
                      onChange={handleStateChange}
                      name="state"
                      value={input.state || ""}
                      label="State"
                      country={input.country}
                      disabled={input.country ? false : true}
                    /> */}
                  </div>
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Town/City "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    name="city"
                    value={input.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Phone "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    name="phone_no"
                    value={input.phone_no}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-[10px] ">
                  {/* <CardElement
                    options={cardElementOpts}
                    onChange={handleCardDetailsChange}
                  /> */}

                  <PaymentElement
                    id="payment-element"
                    options={paymentElementOptions}
                    onChange={handleCardDetailsChange}
                  />
                </div>
                {checkoutError ? (
                  <div className="errors">
                    {" "}
                    <span>{checkoutError}</span>
                  </div>
                ) : null}
                <div className="mt-[10px] text-[12px] text-[#2D80CD] flex items-center gap-2">
                  <div>
                    <input className="mt-1" type="checkbox" name="" id="" />
                  </div>
                  <p>Save this information for next time</p>
                </div>
                <div className="flex justify-end mt-[2rem] pb-[2rem] ">
                  <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                    <div>
                      <img src="/svg/cart2.svg" alt="cart" />
                    </div>
                    <div>
                      <button
                        className="  rounded-md text-white font-semibold "
                        type="submit"
                        // onClick={() => setShow("shipping")}
                      >
                        {isProcessing ? "Processing..." : `Pay $${realPrice}`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* right side */}
          <div className="p-10 w-full hidden md:block">
            <div className="font-semibold text-[22px] ">
              <p>Product Information</p>
            </div>
            <div className="mt-8 w-full">
              <div className="flow-root ">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {carts &&
                    carts.map((items, i) => {
                      return (
                        <li className="flex py-2 justify-between ">
                          <div className="flex items-center gap-7">
                            <div className="relative">
                              <img
                                className="w-[70px]"
                                src={items.thumbnail}
                                alt=""
                              />
                              <div className="absolute top-0 right-0">
                                <p className="text-[10px] rounded-full bg-red-500 w-4 h-4 text-white text-center ">
                                  {items.qty}
                                </p>
                              </div>
                            </div>
                            <div>
                              <div>
                                <p className="text-[10px] ">
                                  <span className="font-bold">
                                    {" "}
                                    {items.name}
                                  </span>
                                  <br />
                                  <span className="text-[10px]">
                                    {items.slug}
                                  </span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            {/* <div className="flex justify-end">
                              <img
                                className="w-[15px]"
                                src="/svg/cross.png"
                                alt=""
                              />
                            </div> */}
                            <p className="text-right font-semibold text-[14px] pt-2">
                              ${items.price}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  {/* <li className="flex py-2 justify-between ">
                    <div className="flex items-center gap-7">
                      <div className="relative">
                        <img
                          className="w-[70px]"
                          src="/images/p1.jpeg"
                          alt=""
                        />
                        <div className="absolute top-0 right-0">
                          <p className="text-[10px] rounded-full bg-red-500 w-4 h-4 text-white text-center ">
                            1
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-[10px] ">
                            <span className="font-bold">
                              {" "}
                              DELTA-9O HIGH POTENCY VAPE
                            </span>
                            <br />
                            <span className="text-[10px]">
                              WITH 2 PACK COMBO
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-end">
                        <img className="w-[15px]" src="/svg/cross.png" alt="" />
                      </div>
                      <p className="text-right font-semibold text-[14px] pt-2">
                        $245.99
                      </p>
                    </div>
                  </li> */}
                  <hr className="border-[10px] shadow-lg" />
                  {/* <li className="flex py-2 justify-between">
                    <div className="flex items-center gap-7">
                      <div className="relative">
                        <img
                          className="w-[70px]"
                          src="/images/p1.jpeg"
                          alt=""
                        />
                        <div className="absolute top-0 right-0">
                          <p className="text-[10px] rounded-full bg-red-500 w-4 h-4 text-white text-center ">
                            1
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-[10px] ">
                            <span className="font-bold">
                              {" "}
                              DELTA-9O HIGH POTENCY VAPE
                            </span>
                            <br />
                            <span className="text-[10px]">
                              WITH 2 PACK COMBO
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-end">
                        <img className="w-[15px]" src="/svg/cross.png" alt="" />
                      </div>
                      <p className="text-right font-semibold text-[14px] pt-2">
                        $245.99
                      </p>
                    </div>
                  </li>

                  <hr className="border-[10px] shadow-lg" />
                  <li className="flex py-2 justify-between">
                    <div className="flex items-center gap-7">
                      <div className="relative">
                        <img
                          className="w-[70px]"
                          src="/images/p1.jpeg"
                          alt=""
                        />
                        <div className="absolute top-0 right-0">
                          <p className="text-[10px] rounded-full bg-red-500 w-4 h-4 text-white text-center ">
                            1
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-[10px] ">
                            <span className="font-bold">
                              {" "}
                              DELTA-9O HIGH POTENCY VAPE
                            </span>
                            <br />
                            <span className="text-[10px]">
                              WITH 2 PACK COMBO
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-end">
                        <img className="w-[15px]" src="/svg/cross.png" alt="" />
                      </div>
                      <p className="text-right font-semibold text-[14px] pt-2">
                        $245.99
                      </p>
                    </div>
                  </li> */}
                  <hr className="border-[10px] shadow-lg" />
                </ul>
              </div>
            </div>
            {/* button  */}

            {/* <form className=" " onSubmit={handleSubmit}> */}
            {!coupanData.price && (
              <form className=" mt-[50px]  flex h-[45px] " onSubmit={handleSub}>
                <input
                  className="w-full p-3 rounded-l-md border outline-none "
                  type="text"
                  placeholder="Enter Promo/Coupon Code"
                  name="discount"
                  value={coupan}
                  onChange={(e) => setCoupan(e.target.value)}
                />

                <button
                  className="w-[127px] py-3 px-5 ml-[2px] h-[45px] bg-[#8C8C8C] outline-none border-none rounded-r-md text-white font-semibold disabled:opacity-25 "
                  type="sumbit"
                  disabled={coupan?.length > 0 ? false : true}
                >
                  Apply
                </button>
              </form>
            )}
            {coupanData.price && <p className="mt-[30px]">Discount Applied</p>}
            {/* </form> */}
            <div className="p-2 text-[12px]">
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-normal">Discount :</p>
                </div>
                <div>
                  <p className="font-bold">
                    {(coupanData.type === "0" && coupanData.price + "%") ||
                      (coupanData.type === "1" && "$" + coupanData.price) ||
                      (coupanData[0] === "no found" && "0") ||
                      "0"}
                  </p>
                  {/* <p className="font-bold">{"0%"}</p> */}
                </div>
              </div>
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-normal">SUBTOTAL :</p>
                </div>
                <div>
                  <p className="font-bold">${realPrice}</p>
                </div>
              </div>
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-normal">Shipping :</p>
                </div>
                <div>
                  <p className="font-bold">Free</p>
                </div>
              </div>
            </div>
            <hr className="border-black mt-[10px]" />
            <div className="p-2">
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-bold">TOTAL :</p>
                </div>
                <div>
                  <p className="font-bold">${realPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-[95px]  w-full bg-black">
        <p className="text-center text-white text-[13px] ">
          Copyright 2022 fly8.com Private Limited. All rights Are Reserved
        </p>
      </div>
    </div>
  );
}

export default Address;
