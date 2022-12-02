import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const { totalQuantity } = useSelector((state) => state.product);
  
  return (
    <div className=" shadow-lg fixed  top-0 z-30 w-full bg-white">
      <div className="container m-auto ">
        <div className="py-4 flex items-center justify-between  md:relative">
          <div className=" hidden md:block"></div>
          <div className="md:absolute md:top-[16px] md:bottom-[16px] md:left-[50%] md:translate-y-[-50%] md:translate-x-[-50%]  ">
            <Link href="/">
              {" "}
              <img
                className=" w-[70px] lg:w-[150px] md:w-[100px] "
                src="/images/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className=" flex gap-4 lg:mt-[12px]">
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
        <div className="hidden lg:block pt-[50px] py-[30px]">
          <ul className="flex gap-8 justify-center font-semibold text-[#0AA085]  ">
            <Link href="/">
              <li>SALE</li>
            </Link>
            <Link href="/">
              <li>LIVE RESIN</li>
            </Link>
            <Link href="/">
              <li>CBD</li>
            </Link>
            <Link href="/">
              <li>DELTA 8</li>
            </Link>
            <Link href="/">
              <li>DELTA 9</li>
            </Link>
            <Link href="/">
              <li>DELTA 10</li>
            </Link>
            <Link href="/">
              <li>THC-CO</li>
            </Link>
            <Link href="/">
              <li>HHC-P</li>
            </Link>
            <Link href="/">
              <li>THC-P</li>
            </Link>
            <Link href="/">
              <li>THC-B</li>
            </Link>
            <Link href="/">
              <li>ABOUT</li>
            </Link>
            <Link href="/">
              <li>WHOLESALE</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
