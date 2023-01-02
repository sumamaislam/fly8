import React from "react";

function Payorder() {
  return (
    <div className="bg-[#ADADAD]">
      <div className="flex items-center px-[10px]    h-[100vh]  ">
        <div className="bg-white max-w-[450px]   m-auto rounded-[20px] shadow-lg">
          <div className="flex justify-end p-4">
            <img src="/svg/cross.png" alt="" />
          </div>
          <div className="flex justify-center mt-[56px]">
            <img src="/svg/tick.svg" alt="" />
          </div>
          <div className="mt-[20px] text-center p-5">
            <p className="font-extrabold">Woohoo.!</p>
            <div className="mt-[20px] font-semibold">
              <p>Your Order With FLY8 Has Been Placed</p>
            </div>
            <div className="mt-[30px] font-semibold">
              <p>
                Pull up a chair, sit back and relax your order is on its way to
                you..!
              </p>
            </div>
            <hr className="w-[200px] m-auto mt-[15px] mb-[20px] border-4 border-black bg-black rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payorder;
