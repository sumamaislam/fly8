import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cards } from "../../data";
import { addToCarts } from "../../redux/product";
import Raiting from "./Raiting";

function Cards() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [btnText, setBtnText] = useState(["ADD To Cart","ADDED To Cart"]);
  const {carts} = useSelector((state)=>state.product)

  const handleAdd = (data) => {
    dispatch(addToCarts(data));
    // router.push({ pathname: "/add_to_cart" });
    // console.log(router.pathname);
  };

  console.log(cards[0].image);
  return (
    <div className="my-[60px] ">
      <div className="container m-auto">
        <h1 className="text-center text-3xl font-medium  text-[#0AA085]">
          OUR NEWEST CANNABINOID BLENDS
        </h1>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 mt-[30px] justify-center ">
          {cards.slice(0, 4).map((items, index) => {
            return (
              <div
                className="max-w-sm bg-white  shadow-md border  my-5"
                key={index}
              >
                <div className="justify-center flex pt-5">
                  <Link href={`/cards/${items.id}`}>
                    <img
                      className="rounded-t-lg max-w-[200px] 2xl:max-w-[300px] "
                      src={items.image[0]}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="p-5">
                <h1 className="text-[14px] 2xl:text-[16px] font-bold tracking-tight text-[black] dark:text-white text-center">{items.name}</h1>
                    <h5 className=" text-[14px]  2xl:text-[14px] font-semibold tracking-tight pt-2 text-[black] dark:text-white text-center ">
                      {items.title}
                    </h5>
                  
                  <p className="mb-4 text-[12px] pt-2 2xl:text-[14px] font-semibold  text-center">
                    {items.price}
                  </p>
                  <div className="mt-[-10px] flex justify-center">
                    <Raiting />
                  </div>
                  <div className="flex justify-center mt-[20px]">
                  
                     <Link href="/cards"

                      className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-[#0AA085] outline-[#0AA085] cursor-pointer outline-1 outline  hover:bg-[#0AA085] hover:text-white "
                      onClick={() => handleAdd(items)}
                    >
                      View Flavours
                      </Link>
                    </div>
                  </div>
                </div>
            
            );
          })}
        </div>
        {/* <div className="flex justify-center mt-[30px] md:my-[50px] cursor-pointer "> */}
          {/* <Link href="/cards">
            <button className="inline-flex items-center px-16 py-2 text-sm font-medium text-center cursor-pointer text-black outline outline-[#0AA085] outline-2   hover:bg-[#0AA085] hover:text-white">
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
          </Link> */}
        {/* </div> */}
      </div>
     
    </div>
  );
}

export default Cards;
