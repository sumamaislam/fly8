import React from 'react'

function PaymentCard() {
  return (
    <div className="border rounded-md mt-[70px] md:w-[50%]  w-[95%]  m-auto">
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
  )
}

export default PaymentCard