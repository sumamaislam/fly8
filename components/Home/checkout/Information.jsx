import Link from "next/link";
import React from "react";
import InputField from "../../common/inputField";
import TextField from "../../common/inputField";
import Selectoption from "../../common/Selectoption";
import Discount from "./Discount";

function Information({ setShow }) {
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
                    onClick={()=>setShow("payment")}>
                      Payment
                    </span>
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[20px]">Contact Information</p>
            <p>
              Already have an account? <Link href="/">Log in</Link>
            </p>
          </div>

          <div className="">
            <form>
              <InputField
                placeholder="Email"
                type="email"
                className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"
              />
              <p className="text-[20px] mt-[1rem] ">Shipping Address</p>
              {/* <InputField
            placeholder="Country/region"
            className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2"
        /> */}
              <Selectoption className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2" />
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
                        <Link
                          href="/add_to_cart"
                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Return to cart
                        </Link>
                      </div>
                    </li>
                  </ol>
                </nav>

                <div>
                  <button
                    className="py-5 px-8 bg-[#0AA085] rounded-md text-white font-semibold"
                    type="submit"
                    onClick={() => setShow("shipping")}
                  >
                    {" "}
                    Continue Shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Discount />
    </div>
  );
}

export default Information;
