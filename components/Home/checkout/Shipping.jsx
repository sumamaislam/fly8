import Link from "next/link";
import React from "react";
import Discount from "./Discount";

function Shipping({ setShow }) {
  return (
    <div className="flex gap-12 justify-center">
        <div className="w-[70%] ml-[25%]">
          <div className="lg:mt-[220px] md:mt-[110px] sm:mt-[110px] mt-[90px] mb-[60px]">
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
                        href="#"
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
                      <Link href="">

                      <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                      onClick={()=>setShow("payment")}
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
                      Wolf Abbott Co, 549 West New Extension, Earum in possimus
                      e, Doloribus dolores do AK 99547, United States
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

            <div className="mt-[40px]">
              <h1 className="text-[20px]">Shipping method</h1>
            </div>
            <div className="border border-gray-500 rounded-md mt-[20px]">
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div className="mt-[2px]">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div>
                    <p>Free Shipping (2-4 Business Days)</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Free</p>
                </div>
              </div>
              <hr className="w-[99%] m-auto border-gray-400" />
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div className="mt-[2px]">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="max-w-[500px]">
                    <p>USPS First Class Package</p>
                    <p className="text-[12px]">4 business days</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">$4.55</p>
                </div>
              </div>
              <hr className="w-[99%] m-auto border-gray-400" />
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div className="mt-[2px]">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="max-w-[500px]">
                    <p>USPS First Class Package</p>
                    <p className="text-[12px]">3 business days</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">$10.48</p>
                </div>
              </div>
              <hr className="w-[99%] m-auto border-gray-400" />
              <div className="flex justify-between p-4">
                <div className="flex gap-5">
                  <div className="mt-[2px]">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="max-w-[500px]">
                    <p>USPS First Class Package</p>
                    <p className="text-[12px]">3 business days</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">$76.62</p>
                </div>
              </div>
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
                  type="submit" onClick={()=>setShow("payment")}
                  >
                  {" "}
                  Continue Payment
                </button>
               
              </div>
            </div>
          </div>
        </div>
        <Discount/>
        </div>
  );
}

export default Shipping;
