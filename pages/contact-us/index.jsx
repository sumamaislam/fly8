import Link from "next/link";
import React from "react";
import { Footer, Header } from "../../components/common";
import { footerDataRequest, navDataRequest } from "../../redux/home";
import { wrapper } from "../../store";

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="container m-auto w-[95%] ">
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
        <div className="lg:w-[80%] mt-[15px] md:mt-[50px] border m-auto flex flex-col lg:flex-row lg:rounded-[30px]  lg:shadow-lg ">
          <div className="text-[12px] md:text-[16px]  w-full py-[50px] bg-[#EDEDED]   lg:rounded-l-[30px] ">
            <p className=" 2xl:pl-[100px] md:pl-[50px] pl-[10px]">CONTACT WITH US</p>
            <p className="text-[16px] md:text-[20px] font-bold 2xl:pl-[100px] md:pl-[50px] pl-[10px]  pt-2">
              SEND US A MESSAGE
            </p>
            <form>
              <div className="w-full px-[10px] md:px-[50px] 2xl:px-[100px] mt-[25px] ">
                <input
                  className="w-full outline-none border-black border py-3 rounded-lg pl-5"
                  type="text"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="w-full   px-[10px] md:px-[50px]  2xl:px-[100px]  mt-[25px] ">
                <input
                  className="w-full outline-none border-black border py-3 rounded-lg pl-5"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>

              <div className="w-full  px-[10px] md:px-[50px]  2xl:px-[100px] mt-[25px]   ">
                <textarea
                  className="border border-black outline-none w-full p-3 rounded-lg "
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="What you are looking for.?"
                ></textarea>
              </div>
              <div className="flex justify-center mt-[30px]">
                <p className="uppercase px-10 py-3 bg-black text-white rounded-lg cursor-pointer">Submit Now</p>

              </div>
            </form>
          </div>
          <div className=" py-[50px] ">
            <div className="text-center lg:w-[300px] xl:w-[400px] m-auto">
              <p className="md:text-[25px] text-[20px] font-bold">CONTACT INFO.</p>
              <div>

              <p className="mt-[50px] uppercase  md:text-[18px] font-bold">
                Address
              </p>
              <p className="text-center text-[15px] mt-[15px] max-w-[215px] m-auto ">
                Print 24/7 LLC 3455 N Beltline Rd Suite # 103 Irving TX 75062
              </p>
              </div>
              <div>

              <p className="mt-[40px] text-center  uppercase md:text-[18px] font-bold">Phone</p>
              <p className="text-center text-[15px] mt-[15px]">USA Office : 123-456-3456</p>
              </div>
              <div>
              <p className="mt-[40px]  uppercase md:text-[18px] font-bold">CUSTOMER SERVICES HOURS</p>
              <p className="text-center text-[15px] mt-[15px]">Mon- Fri, 24 Hours</p>
              </div>
              <div>
              <p className="mt-[40px]  uppercase md:text-[18px] font-bold">FOLLOW US ON</p>
              <div className=" mt-[15px] gap-2 flex justify-center">
                <img src="/socialimages/fb.png" alt="" />
                <img src="/socialimages/insta.png" alt="" />
                <img src="/socialimages/twitter.png" alt="" />
           
                <img src="/socialimages/whatsapp.png" alt="" />

              </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());

});