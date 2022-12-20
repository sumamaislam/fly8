import React from "react";
import { useState } from "react";
import { Footer, Header } from "../common";
import { Email } from "../Home";
import Form from "./Form";
import PaymentCard from "./PaymentCard";
import Subscription from "./Subscription";
import User from "./User";

function Account({ show, setShow }) {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <div className="bg-[url('/profile/22.jpg')] bg-cover ">
        <div className="pt-[130px] pb-[50px]">
          <p className="text-center text-white text-[30px] font-bold">ORDERS</p>
        </div>
      </div>
      <div className="2xl:w-[65%] w-[90%] m-auto">
        <div className="flex justify-between gap-4 items-center md:mt-[100px] mt-[50px]">
          <div className="font-bold md:text-[16px] text-[14px] ">
            <p>PROFILE</p>
          </div>
          <div className="flex px-4 py-2  gap-2 items-center rounded-xl bg-black">
            <button className=" text-[12px] md:text-[14px] font-bold text-white">
              LOG OUT
            </button>
            <div>
              <img className="w-[20px]" src="/svg/logout.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="grid md:grid-cols-5 grid-cols-3 justify-between gap-[2px]">
            <div
              className={`border md:p-10 p-2 border-black w-[80px] md:w-[130px] lg:w-[170px] xl:w-[200px] m-auto rounded-lg shadow-md  mb-[15px] cursor-pointer ${
                show === "orders" && "bg-black "
              }`}
              onClick={() => setShow("orders")}
            >
              <div className="flex justify-center">
                <img
                  className="md:w-[50px] w-[30px]"
                  src={
                    show !== "orders"
                      ? "/svg/cartsblack.svg"
                      : "/svg/profilecart.svg"
                  }
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <h5
                  className={`text-[9px] md:text-[14px] pt-[15px] font-semibold text-center  ${
                    show === "orders" && "text-white"
                  }`}
                >
                  ORDERS
                </h5>
              </div>
            </div>
            <div
              className={`bg-white border md:p-10 p-2 w-[80px] md:w-[130px] lg:w-[170px] xl:w-[200px] border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "address" && "bg-black text-white"
              }`}
              onClick={() => setShow("address")}
            >
              <div className="flex justify-center">
                <img
                  className="md:w-[37px] w-[22px]"
                  src={
                    show === "address"
                      ? "/svg/locationblack.svg"
                      : "/svg/location.svg"
                  }
                  alt=""
                />
              </div>
              <div className="justify-center flex">
                <h5
                  className={`text-[9px] md:text-[14px] pt-[15px] uppercase font-semibold text-center  ${
                    show === "accounts" && "text-white"
                  }`}
                >
                  Address
                </h5>
              </div>
            </div>
            <div
              className={`bg-white border md:p-10 p-2 w-[80px] md:w-[130px] lg:w-[170px] xl:w-[200px] border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "account" && "bg-black text-white"
              }`}
              onClick={() => setShow("account")}
            >
              <div className="flex justify-center">
                <img
                  className="md:w-[53px] w-[30px]"
                  src={
                    show === "account"
                      ? "/svg/orderblack.svg"
                      : "/svg/account.svg"
                  }
                  alt=""
                />
              </div>
              <div className="flex justify-center ">
                <h5
                  className={`text-[9px] md:text-[14px] pt-[15px] uppercase font-semibold text-center  ${
                    show === "account" && "text-white"
                  }`}
                >
                  Account
                </h5>
              </div>
            </div>
            <div
              className={`bg-white border md:p-10 p-2 w-[80px] md:w-[130px] lg:w-[170px] xl:w-[200px] border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer  ${
                show === "payment" && "bg-black text-white"
              }`}
              onClick={() => setShow("payment")}
            >
              <div className="flex justify-center">
                <img
                  className="md:w-[40px] w-[30px]"
                  src={
                    show === "payment"
                      ? "/svg/paymentblack.svg"
                      : "/svg/payment.svg"
                  }
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <h5
                  className={`text-[9px] md:text-[14px] md:pt-[32px] uppercase pt-[20px] font-semibold text-center ${
                    show === "payment" && "text-white"
                  }`}
                >
                  Payment
                </h5>
              </div>
            </div>
            <div
              className={`bg-white border md:p-10 p-2 w-[80px] md:w-[130px] lg:w-[170px] xl:w-[200px] border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "subscription" && "bg-black text-white"
              }`}
              onClick={() => setShow("subscription")}
            >
              <div className="flex justify-center">
                <img
                  className="md:w-[43px] w-[25px]"
                  src={
                    show === "subscription"
                      ? "/svg/subscriptionblack.svg"
                      : "/svg/subscription.svg"
                  }
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <h5
                  className={` text-[9px] md:text-[14px] pt-[15px] uppercase font-semibold text-center  ${
                    show === "subscription" && "text-white"
                  }`}
                >
                  Subscription
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* order */}

        {!showData && show === "orders" && (
          <div className="mt-[40px] border">
            <div className="my-[200px]">
              <p className="text-center font-bold text-[20px]">
                NO ORDER HAS BEEN MADE YET...
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-black text-white text-[16px] font-bold mt-[90px] px-[25px] py-[12px] rounded-xl"
                  onClick={() => setShowData(true)}
                >
                  BROWSE PRODUCTS
                </button>
              </div>
            </div>
          </div>
        )}

        {showData && show === "orders" && (
          <div className="mt-[40px]">
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
                      <thead className="border-b  bg-black text-white ">
                        <tr>
                          <th
                            scope="col"
                            className="md:text-sm  text-[8px] font-medium px-1 py-2  "
                          >
                            Sr. #
                          </th>
                          <th
                            scope="col"
                            className="md:text-sm  text-[8px] font-medium  px-2 py-2 "
                          >
                            Order Number
                          </th>
                          <th
                            scope="col"
                            className="md:text-sm  text-[8px] font-medium px-2 py-2 "
                          >
                            Order Placement Date
                          </th>
                          <th
                            scope="col"
                            className="md:text-sm  text-[8px] font-medium  px-2 py-2 "
                          >
                            Delivery Date
                          </th>
                          <th
                            scope="col"
                            className="md:text-sm  text-[8px] font-medium  px-2 py-2"
                          >
                            Order Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[8px] ">
                            01
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            ABC-234
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            12-12-2022
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            15-12-2022
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap md:text-sm  text-[8px] ">
                            PENDING
                          </td>
                        </tr>

                        <tr className="border-b">
                          <td className="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[8px] ">
                            01
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            ABC-234
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            12-12-2022
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            15-12-2022
                          </td>
                          <td className="  font-light px-2 py-2 whitespace-nowrap md:text-sm  text-green-500 text-[8px] ">
                            DELIVERED
                          </td>
                        </tr>

                        <tr className="border-b">
                          <td className="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[8px] ">
                            01
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            ABC-234
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            12-12-2022
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            15-12-2022
                          </td>
                          <td className=" text-red-500 font-light px-2 py-2 whitespace-nowrap md:text-sm  text-[8px] ">
                            NOT DELIVERED
                          </td>
                        </tr>

                        <tr className="border-b">
                          <td className="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[8px] ">
                            01
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            ABC-234
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            12-12-2022
                          </td>
                          <td className=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[8px] ">
                            15-12-2022
                          </td>
                          <td className=" font-light px-2 py-2 whitespace-nowrap md:text-sm text-green-500 text-[8px] ">
                            DELIVERED
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
