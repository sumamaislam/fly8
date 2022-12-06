import React from "react";
import { Footer, Header } from "../../components/common";
import { Raiting } from "../../components/Home";
import {  cards } from "../../data";
import Link from "next/link";
import { addToCarts } from "../../redux/product";
import { useDispatch} from "react-redux";
import Router, { useRouter } from "next/router";
export default function index() {
 const dispatch = useDispatch();
const router = useRouter();
const handleClick = (data) => {    
  console.log(data)
dispatch(addToCarts(data)) 
router.push({pathname:"/add_to_cart"})
// router.push("/add_to_cart", undefined, { shallow: true });
// router.push("/add_to_cart")
console.log("called")
console.log(router.pathname)
}
  return (
    <div>
      <Header />
      <div className="lg:mt-[147px] md:mt-[40px] mt-[60px] ">
        <div className=" bg-[#369688] text-center py-5">
          <p className="lg:text-4xl md:text-3xl text-2xl my-[4px] font-semibold text-white">
            DELTA-9o
          </p>
          <p className="text-[16px] mt-[20px] text-center text-white font-semibold ">
           
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet.
          </p>
          <p className="text-[16px] mt-[10px] text-center text-white font-semibold ">
           
            Lorem ipsum dolor sit amet Lorem ipsum dolor 
          </p>
        </div>
        <div className="container m-auto">
          <div className="wrapper antialiased text-gray-900 grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 justify-center gap-4 px-[20px] my-[60px]">
            {cards.map((items, index) => {
              return (
                <div className="" key={index}>
                 <Link href={`/cards/${items.id}`}> <img
                    src={items.image[0]}
                    alt="product image"
                    className="w-[300px] py-10 object-cover object-center rounded-lg m-auto border"
                    />
                    </Link>
                  <div className="relative px-8 -mt-11 m-auto w-[300px]">
                    <div className="bg-white p-3 rounded-lg shadow-lg border ">
                      <div className="flex items-baseline">
                        {/* <span className="bg-[#D7DE26] text-teal-800 text-[11px] px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          New
                        </span> */}
                        <div className=" text-gray-600 uppercase text-md font-bold ">
                          {items.name}
                        </div>
                      </div>

                      <h4 className="mt-2 text-[10px] font-semibold uppercase leading-tight truncate">
                        {items.title}
                      </h4>

                      <div className="mt-1  text-xs "> {items.price}</div>
                      <div className="flex items-center justify-between">

                      <div className="">
                        <Raiting />
                      </div>
                      <div className="flex justify-center mt-[5px]">
                        <div
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-[#0AA085] outline-[#0AA085] outline-1 outline  hover:bg-[#0AA085] hover:text-white cursor-pointer  "
                       onClick={()=>handleClick(items)}
                       >
                          
                        Add to Cart
                       </div>
                      </div>
                      </div>
                      <div>
                        
                      </div>
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
