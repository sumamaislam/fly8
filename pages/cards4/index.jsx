import React from "react";
import { Footer, Header } from "../../components/common";
import { Raiting } from "../../components/Home";
import {  cards4 } from "../../data";
import Link from "next/link";
export default function index() {
  return (
    <div>
      <Header />
      <div className="lg:mt-[160px] md:mt-[50px] mt-[70px] ">
        <div className=" bg-[#D7DE26] text-center  p-14">
        <p className="lg:text-4xl md:text-3xl text-2xl my-[4px] font-semibold text-[#369688]">
          DELTA 8
        </p>
        <p className="text-[16px] mt-[20px] text-center text-gray-500 font-semibold "> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>

        </div>
        <div className="container m-auto">
         <div className="wrapper antialiased text-gray-900 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-10 px-[20px] my-[100px]">
            {cards4.map((items, index) => {
              return (
                <div className="" key={index}>
                <img
               src = {items.image[0]} 
                  alt="product image"
                  className="w-full object-cover object-center rounded-lg boxshadow"
                />
      
                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className="bg-[#D7DE26] text-teal-800 text-[11px] px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        New
                      </span>
                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                      {items.name}
                      </div>
                    </div>
      
                    <h4 className="mt-3 text-md font-semibold uppercase leading-tight truncate">
                    {items.title}
                    </h4>
      
                    <div className="mt-1"> {items.price}</div>
                    <div className="">
                      <Raiting />
                    </div>
                    <div className="flex justify-center mt-[20px]">
                      <Link
                        href="#"
                        className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-[#0AA085] outline-[#0AA085] outline-1 outline  hover:bg-[#0AA085] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to Cart
                      </Link>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
     
    </div>
  );
}
