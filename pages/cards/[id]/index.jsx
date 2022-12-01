import React, { useState } from "react";
import { Footer, Header } from "../../../components/common";
import Link from "next/link";
import { cards, details } from "../../../data";
import Acordion from "../../../components/common/Acordion";
import { useDispatch } from "react-redux";
import { addToCarts } from "../../../redux/product";

export default function Detail() {
  const [show, setShow] = useState(details.image[0]);

  const dispatch = useDispatch();

  const handleAdd = () => {
    // dispatch(addToCarts());
  };
  console.log(cards)

  return (
    <div>
      <Header />
      <div className="container m-auto">
        <div className="lg:mt-[160px] md:mt-[50px] mt-[70px] ">
          <nav className="flex py-5 px-[10px]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Flowbite
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex lg:flex-row flex-col justify-center gap-8 px-[10px] py-[50px]">
          <div className="flex  gap-4">
            <div className="w-[100px] ]">
              {details.image.map((items, index) => {
                return (
                  <div
                    className="mb-[10px]"
                    key={index}
                    onClick={() => setShow(items)}
                  >
                    <img
                      className={`bg-[#D8DF21]  border-black ${
                        show === items ? "border-2 " : ""
                      } `}
                      src={items}
                      alt="img"
                    />
                  </div>
                );
              })}
            </div>
            <div className="max-w-[600px] ">
              <img className="bg-[#0AA085]" src={show} alt="" />
            </div>
          </div>
          <div>
            <p className="text-[#0AA085] text-[14px]">{details.name}</p>
            <p className="text-2xl font-semibold text-[#0AA085] ">
              {details.title}
            </p>
            <div className="flex items-center gap-2">
              <p className="font-bold text-[20px]">${details.price}</p>
              <p className=" line-through">${details.price}</p>
            </div>
            <div className="my-[12px] flex gap-4">
              <div className="w-full">
                <Link href="/add_to_cart">
                  <button
                    className="w-full p-3 flex justify-center items-center gap-2 text-black font-bold bg-[#D8DF21]"
                    onClick={handleAdd}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <button className="w-full p-3 flex justify-center items-center gap-2 text-white font-bold bg-[#0AA085]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Move to Checkout
                </button>
              </div>
            </div>
            <div className="max-w-[700px] text-[#0AA085] text-justify">
              <h1 className="font-semibold text-[20px] pt-2">DESCRIPTION</h1>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. it amet
                consectetur adipisicing elit. Unde adipisci saepe eligendi
                voluptate minus sit sed cum fuga, illum, ratione soluta?
                Voluptatem fugit sint nam maiores explicabo, dicta Unde adipisci
                saepe eligendi voluptate minus sit sed cum fuga, illum, ratione
                soluta? Voluptatem fugit sint nam maiores explicabo, dicta odit
                a qui!
              </p>
            </div>

            <Acordion />
            <div className="flex gap-2 my-3 text-[#0AA085]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              <p className="font-bold"> Offers</p>
            </div>
            <div className="text-[#0AA085] pl-6">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                officiis nostrum reiciendis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                officiis nostrum reiciendis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                officiis nostrum reiciendis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                officiis nostrum reiciendis.
              </li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
