import Link from "next/link";
import React from "react";
import { Footer, Header } from "../common";
import { Email } from "../Home";

function Login() {
  return (
    <div>
      <Header />
      <div className="bg-[url('/profile/22.jpg')] bg-cover ">
        <div className="pt-[130px] pb-[50px]">
          <p className="text-center text-white text-[30px] font-bold">ORDERS</p>
        </div>
      </div>
      <div className="2xl:w-[65%] w-[90%] m-auto">
        <div className="flex md:justify-between md:gap-[100px] md:flex-row flex-col-reverse  ">
          {/* left side log in form */}
          <div className="mt-[100px]  md:w-[550px] w-[270px] m-auto">
            <p className="font-bold">LOG IN</p>
            {/* log in form */}
            <form className="">
              {/* email */}
              <div className="mt-[30px] text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="text"
                  placeholder="Username OR Email Address *"
                />
              </div>
              {/* password */}
              <div className="mt-[15px]  text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="passowrd"
                  placeholder="Password *"
                />
              </div>
              {/* forget your password */}
              <div>
                <Link href="">
                  <p className="underline text-[#EB001B] mt-[10px] text-[10px] text-right">
                    Forget your password.?
                  </p>
                </Link>
              </div>
              {/* checkbox */}
              <div className="mt-[15px] text-[12px] font-semibold">
                <input type="checkbox" name="" id="" /> Remember me
              </div>
              {/* button */}
              <div className="w-full bg-black mt-[15px] text-center rounded-xl cursor-pointer">
                <button className="text-[14px] text-white fontbold py-3 ">
                  LOG IN
                </button>
              </div>
            </form>
          </div>
          {/* line */}
          <div class="seperator 2xl:h-[35%] xl:h-[43%] lg:h-[57%] md:h-[25%]"></div>
          {/* right side registration form  */}
          <div className="mt-[100px] md:w-[550px] w-[270px] m-auto">
            <p className="font-bold">REGISTER</p>
            {/* log in form */}
            <form className="">
              {/* email */}
              <div className="mt-[30px] text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="text"
                  placeholder="Email Address  *"
                />
              </div>

              {/* statement */}
              <div className="text-[11px] text-center mt-[10px]">
                <p>
                  A link for the setting PASSWORD will be sent to your given
                  email address
                </p>
              </div>

              {/* button */}
              <div className="w-full bg-black mt-[15px] text-center rounded-xl cursor-pointer">
                <button className="text-[14px] text-white fontbold py-3 ">
                  REGISTER NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <Email />
      <Footer />
    </div>
  );
}

export default Login;
