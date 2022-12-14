import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../../components/common";
import Cart from "../../components/Home/Cart";
import { addtocart } from "../../data";
import {
  deleteCart,
  setTotalPrice,
  setTotalQuantity,
  updateCart,
} from "../../redux/product";

export default function AddToCart({ setShowCart }) {
  const [total, setTotal] = useState("0");
  // const [cart, setCart] = useState(addtocart);

  const dispatch = useDispatch();
  const { carts, totalPrice } = useSelector((state) => state.product);

  const increment = (items, index) => {
    let update = { ...items };
    update.quantity = update.quantity + 1;
    update.total = update.price * update.quantity;
    dispatch(updateCart(update));
  };

  // useEffect(() => {
  //   dispatch(setCarts([...carts]));
  // }, [formVal]);
  const handleDelete = (items) => {
    dispatch(deleteCart(items.id));
  };

  const decerement = (items, index) => {
    const updateVal = { ...items };
    if (updateVal.quantity > 1) {
      updateVal.quantity = updateVal.quantity - 1;
      updateVal.total = updateVal.price * updateVal.quantity;
    }
    dispatch(updateCart(updateVal));
  };

  useEffect(() => {
    const totalAmount = carts?.reduce((a, v) => a + v.price * v.quantity, 0);
    const totalQuantity = carts?.reduce((a, v) => a + v.quantity, 0);
    // console.log(totalQuantity);
    dispatch(setTotalPrice(totalAmount));
    dispatch(setTotalQuantity(totalQuantity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts]);

  // button functionality
  const [input, setInput] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ discount: "" });
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  return (
    // <div class="relative z-10">
    //   <div class="fixed inset-0 overflow-hidden">
    //     <div class="absolute inset-0 overflow-hidden">
    //       <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
    //         <div class="pointer-events-auto w-screen max-w-md">
    //           <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
    //             <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
    //               <div class="flex items-start gap-36">
    //                 <img
    //                   src="/svg/back.svg"
    //                   alt=""
    //                   className="cursor-pointer"
    //                   onClick={() => setShowCart(false)}
    //                 />
    //                 <div class=" flex h-7 items-center justify-center">
    //                   <button
    //                     type="button"
    //                     class="-m-2 p-2  text-gray-400 hover:text-gray-500"
    //                   >
    //                     <span class="sr-only">Close panel</span>
    //                     {/* <!-- Heroicon name: outline/x-mark --> */}
    //                     <img
    //                       className="w-[20px]"
    //                       src="/svg/cartblack.svg"
    //                       alt=""
    //                     />
    //                   </button>
    //                 </div>
    //               </div>
    //               <div>
    //                 <p className="text-[10px] font-bold text-center">
    //                   CONGRATS..!! You get free shipping for your first order
    //                 </p>
    //               </div>
    //               <hr className="border mt-[5px]" />
    //               <div class="mt-8">
    //                 <div class="flow-root">
    //                   <ul role="list" class="-my-6 divide-y divide-gray-200">
    //                     <li class="flex py-2">
    //                       <div className="flex gap-4">
    //                         <div>
    //                           <img
    //                             className="h-24 w-24"
    //                             src="/images/p1.jpeg"
    //                             alt=""
    //                           />
    //                         </div>
    //                         <div>
    //                           <div>
    //                             <p className="text-[12px] font-bold">
    //                               DELTA-9O HIGH POTENCY VAPE{" "}
    //                               <span className="text-[10px]">
    //                                 WITH 2 PACK COMBO
    //                               </span>{" "}
    //                             </p>
    //                           </div>
    //                           <div className="mt-[10px] flex gap-[25px] items-center ">
    //                             <div className="flex gap-[20px] border items-center rounded-md h-[25px] bg-[ #E9EFEE] px-[16px]">
    //                               <div>
    //                                 <img src="/svg/arrowleft.svg" alt="" />
    //                               </div>
    //                               <div>
    //                                 {" "}
    //                                 <p className="text-[15px] font-bold">1</p>
    //                               </div>
    //                               <div>
    //                                 <img src="/svg/arrowright.svg" alt="" />
    //                               </div>
    //                             </div>
    //                           </div>
    //                           <div>
    //                             <p className="text-right font-bold">$245.99</p>
    //                           </div>
    //                         </div>
    //                         <div>
    //                           <img src="/svg/cross.png" alt="" />
    //                         </div>
    //                       </div>
    //                     </li>
    //                     <hr className="border-[10px] shadow-lg" />

    //                     <li class="flex py-2">
    //                       <div className="flex gap-4">
    //                         <div>
    //                           <img
    //                             className="h-24 w-24"
    //                             src="/images/p1.jpeg"
    //                             alt=""
    //                           />
    //                         </div>
    //                         <div>
    //                           <div>
    //                             <p className="text-[12px] font-bold">
    //                               DELTA-9O HIGH POTENCY VAPE{" "}
    //                               <span className="text-[10px]">
    //                                 WITH 2 PACK COMBO
    //                               </span>{" "}
    //                             </p>
    //                           </div>
    //                           <div className="mt-[10px] flex gap-[25px] items-center ">
    //                             <div className="flex gap-[20px] border items-center rounded-md h-[25px] bg-[ #E9EFEE] px-[16px]">
    //                               <div>
    //                                 <img src="/svg/arrowleft.svg" alt="" />
    //                               </div>
    //                               <div>
    //                                 {" "}
    //                                 <p className="text-[15px] font-bold">1</p>
    //                               </div>
    //                               <div>
    //                                 <img src="/svg/arrowright.svg" alt="" />
    //                               </div>
    //                             </div>
    //                           </div>
    //                           <div>
    //                             <p className="text-right font-bold">$245.99</p>
    //                           </div>
    //                         </div>
    //                         <div>
    //                           <img src="/svg/cross.png" alt="" />
    //                         </div>
    //                       </div>
    //                     </li>
    //                     <hr className="border-[10px] shadow-lg" />

    //                     {/* <!-- More products... --> */}
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
    //               <div class="flex justify-between text-base font-medium text-gray-900">
    //                 <p>Subtotal</p>
    //                 <p>$262.00</p>
    //               </div>
    //               <form onSubmit={handleSubmit}>
    //                 <div>
    //                   <input
    //                     className="w-full border h-10 rounded-md text-[12px] font-bold pl-3 outline-none"
    //                     placeholder="Coupon Code"
    //                     type="text"
    //                     onChange={handleChange}
    //                     name="discount"
    //                     value={input.discount}
    //                   />
    //                 </div>
    //                 <div className="w-full  mt-[8px]">
    //                   <button
    //                     type="submit"
    //                     className="w-full border h-10 rounded-md bg-gray-300 text-[14px] disabled:opacity-25"
    //                     disabled={input?.discount?.length > 0 ? false : true}
    //                   >
    //                     Apply coupon
    //                   </button>
    //                 </div>
    //               </form>

    //               <div class="mt-6">
    //                 <Link
    //                   href="/checkout"
    //                   class="flex items-center justify-center rounded-md text-[14px] bg-black border px-6 py-3 text-base font-medium text-white "
    //                 >
    //                   PROCEED TO CHECKOUT
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  )}