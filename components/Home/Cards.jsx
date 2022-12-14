import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cards } from "../../data";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards() {
  const router = useRouter();
  const { main } = useSelector((state) => state.home);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      once: true,
      offset: 30,
    });
  }, []);
  // console.log("DONE", main);
  return (
    <div className=" ">
      <div className="2xl:w-[65%] w-[90%] container  m-auto">
        <div className=" xl:gap-20  gap-12 lg:grid-cols-4 md:grid-cols-2   justify-center ">
          {Object.keys(main).map((item) => {
            return (
              <div className="flex flex-col ">
                <h1 className="text-center my-[80px] text-[40px] font-bold text-black"  data-aos="zoom-in" data-aos-duration="1500">
                  {item}
                </h1>
                {/* {JSON.stringify(main[item])} */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 justify-items-center ">
                  {main && main[item] && main[item]?.map((items, index) => {
                    return (
                      <div className="max-w-sm overflow-hidden w-full" key={index}>
                        <div className="justify-center flex relative overflow-hidden bg-no-repeat bg-cover" data-aos="zoom-out" data-aos-duration="1500" >
                          <img
                            className="rounded-t-lg hover:scale-110 transition duration-500 ease-in-out "
                            src={items.image}
                            alt=""
                          />
                        </div>
                        <div className="pt-[15px]" > 
                          <h1 className="text-[18px] xl:text-[19px] font-extrabold  text-center">
                            {items.name}
                          </h1>
                          <h5 className=" text-[14px]  xl:text-[14px]  font-normal  pt-[15px] text-[#535353]  text-center ">
                            {items.description}
                          </h5>
                          <button className="flex justify-center mt-[32px] m-auto  "
                       >
                            <Link
                              href={`flavour/${items.slug}`}
                              className=" items-center  text-[14px] hover:bg-yellow-500 hover:italic hover:font-extrabold xl:text-[18px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
                            >
                              Get Your Flavour
                            </Link>
                          </button>
                          
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
