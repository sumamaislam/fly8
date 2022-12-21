import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { gummies } from "../../data";

function Gummies() {

  const { gummies } = useSelector((state)=>state.home)

  return (
    <div>
      <div className="mt-[100px] ">
        <div className="2xl:w-[65%] container  m-auto ">
          <h1 className="text-center text-[40px] font-bold  text-black">
            Gummies Category
          </h1>
          <div className="grid xl:gap-20 gap-12 lg:grid-cols-4 md:grid-cols-2 mt-[40px] justify-center ">
            {gummies && gummies.data && gummies.data.data && gummies.data.data.map((items, index) => {
              return (
                <div className="max-w-sm" key={index}>
                  <div className="justify-center flex ">
                    <Link href={`/cards/${items.id}`}>
                      <img
                        className="rounded-t-lg"
                        src={items.thumbnail}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="pt-[15px]">
                    <h1 className="text-[18px] xl:text-[19px] font-extrabold  text-[black] dark:text-white text-center">
                      {items.title}
                    </h1>
                    <h5 className=" text-[14px]  xl:text-[14px]  font-normal  pt-[15px] text-[#535353]  text-center ">
                      {items.details}
                    </h5>

                    <div className="flex justify-center mt-[42px]">
                      <Link
                       href={`${
                        (index === 0 && "/gummies1") ||
                        (index === 1 && "/gummies2") ||
                        (index === 2 && "/gummies3") ||
                        (index === 3 && "/gummies4")
                      }`}
                        className=" items-center  text-[14px] xl:text-[18px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
                      >
                        Get Your Flavour
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gummies;
