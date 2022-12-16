import React from "react";
import { useSelector } from "react-redux";

function Commitment() {
  const { quality } = useSelector((state) => state.home);

  return (
    <div className="mt-[100px]">
      <div className="2xl:w-[65%] container  m-auto ">
        <p className="md:text-[30px] text-[20px] xl:text-[40px] font-semibold text-center">
          Our Commitment to Quality
        </p>
        <div className="mt-[76px] ">
          <div className="mt-[65px] flex gap-8 md:flex-row flex-col items-center justify-between ">
            {quality &&
              quality.data &&
              quality.data.length > 0 &&
              quality.data.map((items, index) => {
                return (
                  <div className="w-[300px]" key={index}>
                    <img
                      className="w-[140px] m-auto"
                      src={items.photo}
                      alt=""
                    />
                    <p className="pt-[10px] text-[18px]  xl:text-[22px] font-bold text-center ">
                      {items.title}
                    </p>
                    <p className="pt-[10px] text-[15px]   font-medium text-[#8C389A] text-center">
                      {items.details}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <hr className="mt-[10px]" />
      </div>
    </div>
  );
}

export default Commitment;
