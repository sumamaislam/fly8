import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { flavours } from "../../data";

import { useEffect } from "react";
import { useState } from "react";

import Cart from "../Home/Cart";
// import { flavours } from "../../data";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showHead, setShowHead] = useState(false);

  const { header } = useSelector((state) => state.home);
  const { totalQuantity } = useSelector((state) => state.product);

  useEffect(() => {
    console.log(header);
  }, [header]);

  // const [headerColor, setHeaderColor] = useState(false);
  // const handleColorChange = () => {
  //   if (window.scrollY > 50) {
  //     setHeaderColor(true);
  //   } else {
  //     setHeaderColor(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleColorChange);
  // return () => window.removeEventListener("scroll", handleColorChange);
  // }, []);

  return (
    //   <div className=" shadow-lg fixed  top-0 z-30 w-full bg-white">
    //     <div className="container m-auto ">
    //       <div className="py-4 flex items-center justify-between  md:relative">
    //         <div className="">
    //           <Link href="/">
    //             {" "}
    //             <img
    //               className=" w-[70px] lg:w-[150px] md:w-[100px] "
    //               src="/images/logo.png"
    //               alt=""
    //             />
    //           </Link>
    //         </div>
    //         <div className=" hidden md:block">
    //           <div className="hidden  lg:block pt-[50px] py-[30px]">
    //             <ul className="flex gap-8 justify-center font-semibold text-[#0AA085]  ">
    //               {flavours.map((data, index) => {
    //                 return (
    //                   <div className="group inline-block" key={index}>
    //                     <button
    //                       aria-haspopup="true"
    //                       aria-controls="menu"
    //                       className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center "
    //                     >
    //                       <span className=" font-semibold w-fit text-[18px]">
    //                         {data.name}
    //                       </span>
    //                       <span>
    //                         <svg
    //                           className="fill-current h-4 w-4 transform group-hover:-rotate-180
    //       transition duration-150 ease-in-out"
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           viewBox="0 0 20 20"
    //                         >
    //                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //                         </svg>
    //                       </span>
    //                     </button>
    //                     <ul
    //                       id="menu"
    //                       aria-hidden="true"
    //                       className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
    // transition duration-150 ease-in-out origin-top min-w-[200px] cursor-pointer"
    //                     >
    //                       {data.submenu?.map((items, index2) => {
    //                         return (
    //                           <li
    //                             className="rounded-sm px-3 py-2 hover:bg-gray-100"
    //                             key={index2}
    //                           >
    //                             {items.name}
    //                           </li>
    //                         );
    //                       })}
    //                     </ul>
    //                   </div>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //         </div>

    //         <div className=" flex gap-4 pr-[20px] cursor-pointer">
    //           <p>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6 text-[#0AA085] "
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>
    //           </p>
    //           <p>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-6 h-6 text-[#0AA085]"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>
    //           </p>
    //           <div className="relative">
    //             <p>
    //               <Link href="/add_to_cart">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth={1.5}
    //                   stroke="currentColor"
    //                   className="w-6 h-6 text-[#0AA085]"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    //                   />
    //                 </svg>
    //               </Link>
    //             </p>
    //             <p className="text-[10px] absolute mt-[-25px] ml-[16px] bg-[#0AA085] px-[5px] rounded-full text-white">
    //               {totalQuantity}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div>
      <nav
        // className={`fixed z-10 top-0 w-full ${
        //   headerColor ? "bg-black shadow-lg transition duration-1000" : ""
        // }`}
        className="fixed z-10 top-0 shadow-lg w-full bg-black bg-opacity-[60%]"
      >
        <Cart showCart={showCart} setShowCart={setShowCart} />
        <div className="container m-auto px-4 h-[64px]  ">
          <div className="flex justify-between ">
            <div className="flex space-x-7">
              <div>
                {/* <!-- Website Logo --> */}
                <Link href="/" className="flex  py-4 px-2">
                  <img src={header?.logo} alt="Logo" className="w-[65px]" />
                </Link>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden lg:block z-10  mt-[20px]  gap-[20px]">
                {header &&
                  // header.data.length > 0 &&
                  header?.data?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={`/${item.link}`}
                        className="py-4 px-2  lg:text-[16px] text-white  hover:border-b-4 border-b-4 border-transparent hover:border-white  "
                      >
                        {item.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className=" flex mt-[20px] space-x-6 cursor-pointer">
              <div className="relative">
                <img
                  className="w-[20px] "
                  src="/svg/cart.svg"
                  alt=""
                  onClick={() => setShowCart(true)}
                />
                {totalQuantity > 0 && (
                  <span className="absolute h-[18px] w-[18px] max-w-auto bg-white rounded-full text-[10px] flex items-center justify-center font-bold top-[-10px] right-[-11px]">
                    {totalQuantity}
                  </span>
                )}
              </div>
              <Link href="/profile">
                {" "}
                <img className="w-[20px]" src="/svg/profile.svg" alt="" />
              </Link>
              <div className=" lg:hidden">
                <button
                  className="outline-none mobile-menu-button"
                  onClick={() => setShowHead(!showHead)}
                >
                  <svg
                    className=" w-6 h-6 text-white hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- Mobile menu button --> */}
          </div>
        </div>
        <div className="">
          <div
            className={`lg:hidden bg-black absolute w-full ease-in-out duration-1000 ${
              showHead ? "" : "hidden h-0"
            }`}
            style={{ marginLeft: 0 }}
          >
            <div className={`container flex-col flex m-auto px-4 ease-in-out duration-1000 ${showHead ? "h-[100vh]" : ""}`}>
            {header &&
              // header.data.length > 0 &&
              header?.data?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${item.link}`}
                    className="py-4 px-2 text-center  lg:text-[16px] text-white  hover:border-b-4 border-b-4 border-transparent hover:border-white  "
                  >
                    {item.name}
                  </Link>
                );
              })}
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
