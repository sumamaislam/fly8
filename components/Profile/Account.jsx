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
        <div className="flex justify-between gap-4 items-center mt-[100px]">
          <div className="font-bold">
            <p>PROFILE</p>
          </div>
          <div className="flex px-4 py-2  gap-2 items-center rounded-xl bg-black">
            <button className=" text-[14px] font-bold text-white">
              LOG OUT
            </button>
            <div>
              <img className="w-[20px]" src="/svg/logout.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="flex justify-between">
            <div
              className={`border md:p-10 p-2 border-black m-auto rounded-lg shadow-md  mb-[15px] cursor-pointer ${
                show === "orders" && "bg-black "
              }`}
              onClick={() => setShow("orders")}
            >
              <div className="flex justify-center">
                
                <img
                  className="md:w-[50px] w-[30px]"
                  src={show !== "orders" ? "/svg/cartsblack.svg" : "/svg/profilecart.svg"}
                  alt=""
                />
              </div>

              <h5 class={`text-[11px] md:text-[14px] pt-[15px] font-semibold text-center  ${show === "orders" && "text-white"}`}>
                ORDERS
              </h5>
            </div>
            <div
              class={`bg-white border md:p-10 p-2 border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "address" && "bg-black text-white"
              }`}
              onClick={() => setShow("address")}
            >
              <div className="flex justify-center">
               
                <img
                  className="md:w-[37px] w-[22px]"
                  src={show === "address" ? "/svg/locationblack.svg" : "/svg/location.svg"}
                  alt=""
                />
              </div>

              <h5 class={`text-[11px] md:text-[14px] pt-[15px] font-semibold text-center  ${show === "accounts" && "text-white"}`  }>
                ORDERS
              </h5>
            </div>
            <div
              class={`bg-white border md:p-10 p-2 border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "account" && "bg-black text-white"
              }`}
              onClick={() => setShow("account")}
            >
              <div className="flex justify-center">
                
                <img
                  className="md:w-[53px] w-[30px]"
                  src={show === "account" ? "/svg/orderblack.svg" : "/svg/account.svg"}
                  alt=""
                />
              </div>

              <h5 className={ `text-[11px] md:text-[14px] pt-[15px] font-semibold text-center  ${show === "account" && "text-white"}`}>
                ORDERS
              </h5>
            </div>
            <div
              class={`bg-white border md:p-10 p-2 border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer  ${
                show === "payment" && "bg-black text-white"
              }`}
              onClick={() => setShow("payment")}
            >
              <div className="flex justify-center">
              
                 <img
                  className="md:w-[40px] w-[30px]"
                  src={show === "payment" ? "/svg/paymentblack.svg" : "/svg/payment.svg"}
                  alt=""
                />
              </div>

              <h5 class={`text-[11px] md:text-[14px] md:pt-[32px] pt-[20px] font-semibold text-center ${show === "payment" && "text-white"}`} >
                ORDERS
              </h5>
            </div>
            <div
              class={`bg-white border md:p-10 p-2 border-black m-auto rounded-lg shadow-md mb-[15px] cursor-pointer ${
                show === "subscription" && "bg-black text-white"
              }`}
              onClick={() => setShow("subscription")}
            >
              <div className="flex justify-center">
                
                <img
                  className="md:w-[45px] w-[25px]"
                  src={show === "subscription" ? "/svg/subscriptionblack.svg" : "/svg/subscription.svg"}
                  alt=""
                />
              </div>

              <h5 class={` text-[11px] md:text-[14px] pt-[15px] font-semibold text-center  ${show === "subscription" && "text-white"}` }>
                ORDERS
              </h5>
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
              <div class="sm:-mx-6 lg:-mx-8">
                <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full border text-center">
                      <thead class="border-b bg-black text-white">
                        <tr>
                          <th
                            scope="col"
                            class="md:text-sm  text-[10px] font-medium px-1 py-2 "
                          >
                            Sr. #
                          </th>
                          <th
                            scope="col"
                            class="md:text-sm  text-[10px] font-medium  px-2 py-2 "
                          >
                            Order Number
                          </th>
                          <th
                            scope="col"
                            class="md:text-sm  text-[10px] font-medium px-2 py-2 "
                          >
                            Order Placement Date
                          </th>
                          <th
                            scope="col"
                            class="md:text-sm  text-[10px] font-medium  px-2 py-2 "
                          >
                            Delivery Date
                          </th>
                          <th
                            scope="col"
                            class="md:text-sm  text-[10px] font-medium  px-2 py-2"
                          >
                            Order Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[10px] ">
                            01
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            ABC-234
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            12-12-2022
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            15-12-2022
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap md:text-sm  text-[10px] ">
                            PENDING
                          </td>
                        </tr>

                        <tr class="border-b">
                          <td class="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[10px] ">
                            01
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            ABC-234
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            12-12-2022
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            15-12-2022
                          </td>
                          <td class="  font-light px-2 py-2 whitespace-nowrap md:text-sm  text-green-500 text-[10px] ">
                            DELIVERED
                          </td>
                        </tr>

                        <tr class="border-b">
                          <td class="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[10px] ">
                            01
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            ABC-234
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            12-12-2022
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            15-12-2022
                          </td>
                          <td class=" text-red-500 font-light px-2 py-2 whitespace-nowrap md:text-sm  text-[10px] ">
                            NOT DELIVERED
                          </td>
                        </tr>

                        <tr class="border-b">
                          <td class="px-6 py-2 whitespace-nowrap font-medium text-gray-900 border-r md:text-sm  text-[10px] ">
                            01
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            ABC-234
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            12-12-2022
                          </td>
                          <td class=" text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r md:text-sm  text-[10px] ">
                            15-12-2022
                          </td>
                          <td class=" font-light px-2 py-2 whitespace-nowrap md:text-sm text-green-500 text-[10px] ">
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
