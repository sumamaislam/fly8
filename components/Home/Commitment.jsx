import React from "react";
function Commitment() {
  return (
    <div className="mt-[100px]">
      <div className="2xl:w-[65%] container  m-auto ">
        <p className="md:text-[30px] text-[20px] xl:text-[40px] font-semibold text-center">
          Our Commitment to Quality
        </p>
        <div className="mt-[76px] ">
          <div className="mt-[65px] flex gap-8 md:flex-row flex-col items-center justify-between ">
            <div className="w-[300px]">
              <img
                className="w-[140px] m-auto"
                src="/commitment/1.png"
                alt=""
              />
              <p className="pt-[10px] text-[18px]  xl:text-[22px] font-bold text-center ">
                Made In USA
              </p>
              <p className="pt-[10px] text-[15px]   font-medium text-[#8C389A] text-center">
                Our all products are <br /> made up from USA.
              </p>
            </div>
            <div className="w-[300px]  ">
              <img
                className="w-[140px] m-auto"
                src="/commitment/1.png"
                alt=""
              />
              <p className="pt-[10px] text-[18px]  xl:text-[22px] font-bold text-center ">
                RETURNS & EXCAHNGE
              </p>
              <p className="pt-[10px] text-[15px]   font-medium text-[#8C389A] text-center">
                RETURNS & EXCAHNGE 40 Days OF COMPLETE WARRANTY & CHECKING
              </p>
            </div>
            <div className="w-[300px]">
              <img
                className="w-[140px] m-auto"
                src="/commitment/1.png"
                alt=""
              />
              <p className="pt-[10px] text-[18px]   xl:text-[22px] font-bold text-center">
                Verified Potency
              </p>
              <p className="pt-[10px] text-[15px]  font-medium text-[#8C389A] text-center">
                Best In Measuring the concentration
              </p>
            </div>
            <div className="w-[300px]">
              <img
                className="w-[140px] m-auto"
                src="/commitment/1.png"
                alt=""
              />
              <p className="pt-[10px] text-[18px]   xl:text-[22px] font-bold text-center">
                Farm Bill Compliant
              </p>
              <p className="pt-[10px] text-[15px] font-medium text-[#8C389A] text-center">
                Farm Bill Compliant Ensure that hemp used in products are legal
                in term of Farm Bill
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-[10px]" />
      </div>
    </div>
  );
}

export default Commitment;
