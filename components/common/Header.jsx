import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { flavours } from "../../data";
import index from "../../pages/add_to_cart";
// import { flavours } from "../../data";

function Header() {
  const { totalQuantity } = useSelector((state) => state.product);

  return (
    <div className=" shadow-lg fixed  top-0 z-30 w-full bg-white">
      <div className="container m-auto ">
        <div className="py-4 flex items-center justify-between  md:relative">
          <div className="">
            <Link href="/">
              {" "}
              <img
                className=" w-[70px] lg:w-[150px] md:w-[100px] "
                src="/images/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className=" hidden md:block">
            <div className="hidden  lg:block pt-[50px] py-[30px]">
              <ul className="flex gap-8 justify-center font-semibold text-[#0AA085]  ">
                {flavours.map((data, index) => {
                  return (
                    <div class="group inline-block" key={index}>
                      <button
                        aria-haspopup="true"
                        aria-controls="menu"
                        class="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center "
                      >
                        <span class=" font-semibold w-fit text-[18px]">
                          {data.name}
                        </span>
                        <span>
                          <svg
                            class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        id="menu"
                        aria-hidden="true"
                        class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-[200px] cursor-pointer"
                      >
                        {data.submenu?.map((items, index2) => {
                          return (
                            <li
                              class="rounded-sm px-3 py-2 hover:bg-gray-100"
                              key={index2}
                            >
                              {items.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className=" flex gap-4 pr-[20px] cursor-pointer">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#0AA085] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#0AA085]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <div className="relative">
              <p>
                <Link href="/add_to_cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#0AA085]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Link>
              </p>
              <p className="text-[10px] absolute mt-[-25px] ml-[16px] bg-[#0AA085] px-[5px] rounded-full text-white">
                {totalQuantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
