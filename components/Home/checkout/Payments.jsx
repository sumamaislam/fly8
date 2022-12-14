import React from "react";
import Link from "next/link";

import { useState } from "react";
import InputField from "../../common/inputField";
import Selectoption from "../../common/Selectoption";

function Payments({ setShow }) {
  const [input, setInput] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const [showModal, setShowModal] = useState(false);
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
                  <Link href="">
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
        <div className="font-semibold md:text-[22px] text-[16px] mt-[25px]">
          <p>Payment</p>
        </div>
        <div className="mt-[20px] border-black border flex gap-[20px] ">
          {/* left side */}

          <div className=" md:p-10 p-2 w-full">
            <div className="border md:p-6 p-2 rounded-lg">
              <p className="md:text-[20px] text-[16px] font-bold">Contact Information</p>
              <div className="  flex justify-between mt-4 border py-3 px-[10px] md:px-[25px] border-[#000000] rounded-lg">
                <div>
                  <p className="font-semibold w-[90%] md:text-[16px] text-[13px]">abcdef234@gmail.com</p>
                </div>
                <div>
                  <p className="text-[#999898;] md:text-[16px] text-[13px]">Change</p>
                </div>
              </div>
              <div className="  flex justify-between mt-4 border py-3 px-[10px] md:px-[25px] border-black rounded-lg">
                <div>
                  <p className="font-semibold md:text-[16px] text-[13px] w-[90%]">
                    Abc Def, xyzabcxyzstreet, New york, DE, 54000{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[#999898;] md:text-[16px] text-[13px]">Change</p>
                </div>
              </div>
              <div className=" flex justify-between mt-4 border py-3 px-[10px] md:px-[25px] border-black rounded-lg">
                <div>
                  <p className="font-semibold w-[90%] md:text-[16px] text-[13px]">
                    Free Shipping With 5-8 Business Days
                  </p>
                </div>
                <div>
                  <p className="text-[#999898;] md:text-[16px] text-[13px]">Change</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border rounded-md mt-[30px]">
                <div className="flex justify-between p-2 md:p-4">
                  <div>
                    <p className="font-bold ">Payment</p>
                    <p className="font-medium md:text-[16px] text-[14px]" >Supported Credit Cards</p>
                  </div>
                  <div className="">
                    <img
                      className="w-[140px]"
                      src="/images/payment icon.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" pb-10">
                  <div className="md:px-5 px-2 pt-3 flex relative">
                    <input
                      className="w-full p-3 outline-none border-gray-500 border rounded-md  text-[12px] md:text-[16px]"
                      type="number"
                      placeholder="Card Number"
                    />
                    <div className="absolute right-9 top-[26px]">
                      <img src="/svg/card.svg" alt="" />
                    </div>
                  </div>
                  <div className="md:px-5 px-2 pt-3 text-[12px] md:text-[16px]">
                    <input
                      className="w-full p-3 outline-none border-gray-500 border rounded-md"
                      type="text"
                      placeholder="Name on Card"
                    />
                  </div>

                  <div className="flex w-full gap-3 md:px-5 px-2 pt-3  text-[12px] md:text-[16px]">
                    <div className="w-full">
                      <input
                        className="w-full p-3 outline-none border-gray-500 border rounded-md"
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="w-full flex relative">
                      <input
                        className="w-full p-3 outline-none border-gray-500 border rounded-md"
                        type="Password"
                        placeholder="Security Code"
                      />
                      <div className="absolute right-4 top-4">
                        <img src="/svg/question.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right text-[12px] text-[#388C35] px-1 text-center md:px-6 pt-[10px]">
                    <p>
                      Each Transections are encrypted and secure with fly8.com
                    </p>
                  </div>
                </div>
              </div>

              {/* billing address */}
              <div className="border md:p-6 p-2 rounded-lg mt-[30px]">
                <p className="md:text-[22px] text-[16px] font-bold">Billing Address</p>
                <p className="text-[12px] md:pt-[15px]">
                  Select Address Which Matches With Your Payment Method
                </p>
                <div className="  mt-4 border py-3 px-[25px] border-[#000000] rounded-lg">
                  <div className="flex gap-5">
                    <div class="flex items-center ">
                      <input
                        id="country-option-1"
                        type="radio"
                        checked={!showModal ? true : false}
                        name="countries"
                        value="USA"
                        class="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        onClick={() => setShowModal(false)}
                      />
                    </div>
                    <div className="max-w-[400px]">
                      <p className="md:text-[16px] text-[13px]"> Same as shipping address</p>
                    </div>
                  </div>
                </div>

                <div className="  mt-4 border py-3 px-[25px] border-[#000000] rounded-lg">
                  <div className="flex gap-5 items-center">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        checked={showModal ? true : false}
                        name="countries"
                        value="USA"
                        class="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        onClick={() => setShowModal(true)}
                      />
                    </div>
                    <div className="max-w-[400px]">
                      <p className="md:text-[16px] text-[13px]"> Use a different billing address</p>
                    </div>
                  </div>
                </div>
                {showModal && (
                  <div>
                    <div className="flex  justify-between gap-4">
                      <div className="w-full">
                        <InputField
                          placeholder="First Name"
                          className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                        />
                      </div>
                      <div className="w-[100%]">
                        <InputField
                          placeholder="Last Name"
                          className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                        />
                      </div>
                    </div>

                    <InputField
                      placeholder="Company (optional)"
                      className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                    />
                    <InputField
                      placeholder="Street Address"
                      className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                    />

                    <div className="flex  justify-between gap-4">
                      <div className="w-[100%]">
                        <Selectoption className="w-full  mt-[10px] border  border-gray-700 rounded-md p-2" />
                      </div>
                      <div className="w-full">
                        <InputField
                          placeholder="Zip Code"
                          className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                        />
                      </div>
                      <div className="w-full">
                        <InputField
                          placeholder="State"
                          className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <InputField
                        placeholder="Town/City "
                        className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                      />
                    </div>
                    <div className="w-full">
                      <InputField
                        placeholder="Phone "
                        className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                      />
                    </div>
                  </div>
                )}

                {/* DEATILS */}
                <div className="mt-[30px] text-[13px] md:ml-[20px] font-semibold">
                  <p>
                    Your personal data will be used to process order, Read Our{" "}
                    <a href="" className="text-[#2D80CD]">
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </p>
                  <div className="flex gap-2 md:gap-6 mt-[15px] items-center">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <p>
                        I confirm that I am 21+ and agreed with the website{" "}
                        <a href="" className="text-[#2D80CD]">
                          Term and Conditions{" "}
                        </a>{" "}
                        <span className="text-red-500">*</span>{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-6 mt-[15px] items-center">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <p>Sign me up to receive email updates and news.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="">
                <p className="text-[#2D80CD] text-[13px] ml-[20px] mt-[20px]">
                  Return to Shipping
                </p>
              </Link>
              <div className="flex justify-end mt-[2rem] pb-[2rem] ">
                <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                  <Link href="/payorder">

                  <div>
                    <button
                      className="  rounded-md text-white font-semibold"
                      type="submit" 
                      >
                      Place Order
                    </button>
                  </div>
                        </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="p-10 w-full hidden md:block">
            <div className="font-semibold text-[22px] ">
              <p>Product Information</p>
            </div>
            <div class="mt-8 w-full">
              <div class="flow-root ">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  <li class="flex py-2 justify-between ">
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
                  <li class="flex py-2 justify-between">
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
                  <li class="flex py-2 justify-between">
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
                </ul>
              </div>
            </div>
            {/* button  */}

            <form className=" " onSubmit={handleSubmit}>
              <div className=" mt-[50px]  flex h-[45px] ">
                <input
                  className="w-full p-3 rounded-l-md border outline-none "
                  type="text"
                  placeholder="Enter Promo/Coupon Code"
                  name="discount"
                  value={input.discount}
                  onChange={handleChange}
                />

                <button
                  className="w-[127px] py-3 px-5 ml-[2px] h-[45px] bg-[#8C8C8C] outline-none border-none rounded-r-md text-white font-semibold disabled:opacity-25 "
                  type="sumbit"
                  disabled={input?.discount?.length > 0 ? false : true}
                >
                  Apply
                </button>
              </div>
            </form>
            <div className="p-2 text-[12px]">
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-normal">Discount :</p>
                </div>
                <div>
                  <p className="font-bold">10%</p>
                </div>
              </div>
              <div className="w-full flex justify-between mt-4">
                <div>
                  <p className="font-normal">SUBTOTAL :</p>
                </div>
                <div>
                  <p className="font-bold">$245.99</p>
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
                  <p className="font-bold">$245.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full mt-[57px] bg-black">
        <p className="text-center text-white text-[13px] ">
          Copyright 2022 fly8.com Private Limited. All rights Are Reserved
        </p>
      </div>
    </div>
  );
}

export default Payments;
