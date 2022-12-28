import Link from "next/link";
import React from "react";
import { Footer, Header } from "../../components/common";

function ContactUs() {
  return (
    <div>
        <Header/>
      <div className="container m-auto ">
        <div>
          <nav className="flex mt-[5rem] " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/add_to_cart"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
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
                  >
                  Contact Us
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="w-[70%] mt-[50px] border m-auto flex">
          <div className="text-[12px] md:text-[16px]  w-full py-[50px] bg-[#EDEDED]">
            <p className=" pl-[100px]">CONTACT WITH US</p>
            <p className="text-[16px] md:text-[20px] font-bold pl-[100px] pt-2">SEND US A MESSAGE</p>
          <form >
            <div className="w-full px-[100px] mt-[25px] ">
            <input className="w-full outline-none border-black border py-3 rounded-lg pl-5" type="text" placeholder="Your Full Name" />
            </div>
            <div className="w-full px-[100px] mt-[25px] ">
            <input className="w-full outline-none border-black border py-3 rounded-lg pl-5" type="text" placeholder="Your Email Address" />
            </div>

            <div className="w-full px-[100px] mt-[25px] ">
          <textarea className="border border-black w-full p-3" name="" id="" cols="30" rows="10" placeholder="What you are looking for.?"></textarea>
            </div>
          </form>
          </div>
          <div className=" py-[50px] ">
            <div className="text-center w-full m-auto">
              <p className="">CONTACT INFO.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
