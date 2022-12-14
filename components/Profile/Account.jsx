import React from "react";
import { Footer, Header } from "../common";
import { Email } from "../Home";

function Account() {
  return (
    <div>
      <Header />
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
                <button className=" text-[14px] font-bold text-white">LOG OUT</button>
                <div>
                <img className="w-[20px]" src="/svg/logout.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="mt-[60px]">
            <div className="flex ">
               
<div class="max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex justify-center">

  <img  src="/svg/profilecart.svg" alt="" />
    
  </div>
   

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">ORDERS</h5>
    </a>
</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </div>

   
      </div>
      <Email />
      <Footer />
    </div>
  );
}

export default Account;
