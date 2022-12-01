import Link from "next/link";
import React, { useState } from "react";
import Discount from "./Discount";
import Selectoption from "../../common/Selectoption";
import InputField from "../../common/inputField";

function Payment({ setShow }) {

  const [showModel ,setShowModel] = useState(false)
  return (
    <div className="  flex justify-center gap-12">
      <div className="w-[70%] ml-[25%]">
        <div className="lg:mt-[220px] md:mt-[110px] sm:mt-[110px] mt-[90px]  mb-[60px]">
          <div>
            <nav
              className="flex mt-[2rem] pb-[2rem] justify-center"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/add_to_cart"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Cart
                  </Link>
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
                      href=""
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      onClick={() => setShow("information")}
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
                        className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
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

          <div className="border border-gray-500 rounded-md">
            <div className="flex justify-between p-4">
              <div className="flex gap-5">
                <div>
                  <p>Contact</p>
                </div>
                <div className="max-w-[400px]">
                  <p>sumamaislam800@gmail.com</p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-[99%] m-auto border-gray-400" />
            <div className="flex justify-between p-4">
              <div className="flex gap-5">
                <div>
                  <p>Ship to</p>
                </div>
                <div className="max-w-[400px]">
                  <p>
                    Wolf Abbott Co, 549 West New Extension, Earum in possimus e,
                    Doloribus dolores do
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-[99%] m-auto border-gray-400" />
            <div className="flex justify-between p-4">
              <div className="flex gap-5">
                <div>
                  <p>Method</p>
                </div>
                <div className="max-w-[400px]">
                  <p>
                    Free Shipping (2-4 Business Days) ·
                    <span className="font-semibold"> Free </span>
                  </p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* PAYMENT CARD */}
          <div>
            <p className="pt-[60px] font-semibold text-[20px]"> Payment</p>
            <p className="pt-2">All transactions are secure and encrypted.</p>

            <div className="border border-gray-500 rounded-md mt-[20px]">
              <div className="flex justify-between p-4">
                <div>
                  <p>Credit Card</p>
                </div>
                <div className="">
                  <img
                    className="w-[140px]"
                    src="/images/payment icon.png"
                    alt=""
                  />
                </div>
              </div>
              <hr />
              <div className="bg-gray-100 pb-10">
                <div className="px-5 pt-3 flex relative">
                  <input
                    className="w-full p-3 outline-none border-gray-500 border rounded-md"
                    type="number"
                    placeholder="Card Number"
                  />
                  <div className="absolute right-6 top-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-5 pt-3">
                  <input
                    className="w-full p-3 outline-none border-gray-500 border rounded-md"
                    type="text"
                    placeholder="Name on Card"
                  />
                </div>

                <div className="flex w-full gap-3 px-5 pt-3">
                  <div className="w-full">
                    <input
                      className="w-full p-3 outline-none border-gray-500 border rounded-md"
                      type="date"
                      placeholder="Date"
                    />
                  </div>
                  <div className="w-full flex relative">
                    <input
                      className="w-full p-3 outline-none border-gray-500 border rounded-md"
                      type="Password"
                      placeholder="Security Code"
                    />
                    <div className="absolute right-1 top-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BILLING ADDRESS */}
          <div className="pt-[60px]">
            <div>
              <p className="text-[20px] font-semibold ">Billing Address</p>
              <p className="pt-2">
                Select the address that matches your card or payment method.
              </p>
            </div>
            {/* form billing address */}
            <div className="border border-gray-500 rounded-md mt-[30px]">
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div class="flex items-center mb-4">
                    <input
                      id="country-option-1"
                      type="radio"
                      checked={ !showModel ? true : false}
                      name="countries"
                      value="USA"
                      class="h-4 w-4 border-gray-300  focus:ring-black "
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      onClick={()=>setShowModel(false)}
                    />
                  </div>
                  <div className="max-w-[400px]">
                    <p> Same as shipping address</p>
                  </div>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div>
                  <input
                      id="country-option-1"
                      type="radio"
                      checked={ showModel ? true : false}
                      name="countries"
                      value="USA"
                      class="h-4 w-4 border-gray-300  focus:ring-black "
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      onClick={()=>setShowModel(true)}
                    />
                  </div>
                  <div className="max-w-[400px]">
                    <p> Use a different billing address</p>
                  </div>
                </div>
              </div>
              <hr />
             {showModel && <div className="px-[20px] my-[12px] mb-[20px]">
                <Selectoption className="w-full   border border-gray-700 rounded-md p-2" />

                <div className="flex  justify-between gap-4">
                  <div className="w-full">
                    <InputField
                      placeholder="First Name"
                      className=" w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                    />
                  </div>
                  <div className="w-[100%]">
                    <InputField
                      placeholder="Last Name"
                      className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                    />
                  </div>
                </div>
                <InputField
                  placeholder="Company (optional)"
                  className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                />
                <InputField
                  placeholder="Address"
                  className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                />
                <InputField
                  placeholder="Apartment, Suite, etc (optional)"
                  className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                />
                <div className="flex  justify-between gap-4">
                  <div className="w-full">
                    <InputField
                      placeholder="City"
                      className=" w-full outline-none py-3 mt-[1rem] border border-gray-700 rounded-md p-2"
                    />
                  </div>
                  <div className="w-[100%]">
                    <InputField
                      placeholder="Phone "
                      className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
                    />
                  </div>
                </div>
              </div>}
              
            </div>
            <div className="flex justify-between items-center mt-[2rem] pb-[2rem] ">
              <nav className="flex " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>

                      <button
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        onClick={() => setShow("information")}
                      >
                        Return to information
                      </button>
                    </div>
                  </li>
                </ol>
              </nav>

              <div>
                <button
                  className="py-5 px-8 bg-[#0AA085] rounded-md text-white font-semibold"
                  type="submit"
                >
                  {" "}
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Discount />
    </div>
  );
}

export default Payment;
