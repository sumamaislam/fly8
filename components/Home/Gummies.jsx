import Link from "next/link";
import React from "react";
import { gummies } from "../../data";

function Gummies() {
  return (
    <div>
      <div className="mt-[100px] ">
        <div className="2xl:w-[65%] container  m-auto ">
          <h1 className="text-center text-[40px] font-bold  text-black">
            Gummies Category
          </h1>
          <div className="grid xl:gap-20 gap-12 lg:grid-cols-4 md:grid-cols-2 mt-[40px] justify-center ">
            {gummies.slice(0, 4).map((items, index) => {
              return (
                <div className="max-w-sm     " key={index}>
                  <div className="justify-center flex ">
                    <Link href={`/cards/${items.id}`}>
                      <img
                        className="rounded-t-lg   "
                        src={items.image[0]}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="pt-[15px]">
                    <h1 className="text-[18px] xl:text-[24px] font-extrabold  text-[black] dark:text-white text-center">
                      {items.name}
                    </h1>
                    <h5 className=" text-[14px]  xl:text-[16px]  font-normal  pt-[15px] text-[#535353]  text-center ">
                      {items.title}
                    </h5>

                    <div className="flex justify-center mt-[42px]">
                      <Link
                        href="/cards"
                        className=" items-center hover:animate-bounce text-[14px] xl:text-[18px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
                        onClick={() => handleAdd(items)}
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
