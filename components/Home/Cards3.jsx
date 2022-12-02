import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { cards3 } from "../../data";
import { addToCarts } from "../../redux/product";
import Raiting from "./Raiting";

function Cards3() {
const dispatch = useDispatch();
const handleAdd =(items)=>{
dispatch(addToCarts(items))
}
  return (
    <div className="my-[60px] md:my-[100px]">
      <div className="container m-auto">
       
        <h1 className="text-center text-3xl font-medium mb-[60px] text-[#0AA085]">
          OUR NEWEST CANNABINOID BLENDS
        </h1>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 justify-center ">
          {cards3.slice(0, 4).map((items, index) => {
            return (
              <div
              className="max-w-sm bg-white  shadow-md border  my-5"
              key={index}
            >
              <div className="justify-center flex">

              <Link href={`/cards/${items.id}`}>
                <img className="rounded-t-lg max-w-[200px] 2xl:max-w-[250px]" src={items.image[0]} alt="" />
              </Link>
              </div>
              <div className="p-5">
              
                  <h5 className=" text-[14px] 2xl:text-[16px] font-bold tracking-tight text-[black] dark:text-white">
                    {items.title}
                  </h5>
               
                <p className="mb-4 text-[12px] 2xl:text-[16px] font-bold">
                  {items.price}
                </p>
                <div className="mt-[-20px]">

                <Raiting />
                </div>
                <div className="flex justify-center mt-[20px]">

                
                  <div
                  className="inline-flex items-center px-10 py-2 text-sm cursor-pointer font-medium text-center text-[#0AA085] outline-[#0AA085] outline-1 outline  hover:bg-[#0AA085] hover:text-white "
                  onClick={()=>handleAdd(items)}>
                Add to Cart
                  
              </div>
                      </div>
              </div>
            </div>
          );
        })}
      </div>
        <div className="flex justify-center mt-[30px] md:my-[50px] ">
          <Link href="/cards">

          <button className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-black outline outline-[#0AA085] outline-2   hover:bg-[#0AA085] hover:text-white">
            View More
           <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      ></path>
                  </svg> 
          </button>
                      </Link>
        </div>
      </div>
      <hr className="mt-[50px] border-[#D8DF21]" />
    </div>
  );
}

export default Cards3;
