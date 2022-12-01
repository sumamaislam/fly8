import React from "react";

function Email() {
  return (
    <div>
      <div className='bg-[url("/images/email.jpg")] md:mt-[30px]  '>
        {/* left side */}
        <div className="container m-auto   gap-16 py-[50px] md:py-[100px] px-[10px]">
          <div className="text-[#D8DF21] text-center">
            <p className="  font-bold text-3xl md:text-5xl">
             FLY 8
            </p>
            <p className=" font-bold text-3xl md:text-5xl pt-2">
              SIGN UP & SAVE 10%
            </p>
            <p className="p-2">
              Sign Up Today And Receive 10% OFF Your First Order.
            </p>
            <p className="text-[14px]">
              (This Coupon Will Not Be Applicable On Sale Items)
            </p>
          </div>
          {/* right section */}
          {/* <div className="flex ">
            <div>
              <input
                className="w-[200px]  md:w-[450px] h-[40px] pl-2 outline outline-[#0AA085] outline-1"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <button className="bg-[#D8DF21]  outline outline-[#0AA085] outline-1 font-semibold p-2 px-7">
                Send
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Email;
