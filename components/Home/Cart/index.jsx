import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  setTotalPrice,
  setTotalQuantity,
  updateCart,
} from "../../../redux/product";

export default function Cart({ showCart ,setShowCart }) {
  const dispatch = useDispatch();
  const { carts, totalPrice } = useSelector((state) => state.product);
  console.log("carts11111111111", carts);

  const increment = (items, index) => {
    let update = { ...items };
    update.quantity = update.quantity + 1;
    update.total = update.price * update.quantity;
    dispatch(updateCart(update));
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
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
    if (carts) {
      const totalAmount = carts?.reduce((a, v) => a + v.price * v.quantity, 0);
      const totalQuantity = carts?.reduce((a, v) => a + v.quantity, 0);
      // console.log(totalQuantity);
      dispatch(setTotalPrice(totalAmount));
      dispatch(setTotalQuantity(totalQuantity));
    }
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

  // useEffect(() => {
  //   const newTotal = cart.reduce((a, b) => {
  //     return a - -b.price * b.quantity;
  //   }, 0);
  //   setTotal(newTotal);
  // }, [cart]);

  // const increment = (data, index) => {
  //   const increase = data.quantity;
  //   console.log(increase + 1);
  //   const item = [...cart];
  //   item[index] = { ...item[index], quantity: increase + 1 };
  //   setCart(item);
  // };

  // const decerement = (data, index) => {
  //   const decrease = data.quantity;
  //   console.log(decrease - 1);
  //   const item = [...cart];
  //   item[index] = { ...item[index], quantity: decrease - 1 };
  //   setCart(item);
  //   if (data.quantity === 1) {
  //     const filter = cart.filter((dell) => dell !== data);
  //     setCart(filter);
  //   }
  // };
  // const handleDelete = (data) => {
  //   console.log("dell");
  //   const filterd = cart.filter((items) => {
  //     return data !== items;
  //   });
  //   setCart(filterd);
  // };
  return (
    <div>
      
      <div className="relative background: rgba(0, 0, 0, 0.5) z-50">
        <div className={`fixed inset-0 overflow-hidden ease-in-out duration-1000  ${showCart ? "translate-x-0 " : "translate-x-full"}`} >
          <div className={`absolute inset-0 overflow-hidden bg-black bg-opacity-75 `}>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"    >
              <div className={`pointer-events-auto w-screen max-w-md `} >
                <div className={`flex h-full flex-col overflow-y-scroll bg-white shadow-xl `}>
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start gap-36">
                      <img
                        src="/svg/back.svg"
                        alt=""
                        className="cursor-pointer "
                        onClick={() => setShowCart(false) }
                      />
                      <div className=" flex h-7 items-center justify-center">
                        <button
                          type="button"
                          className="-m-2 p-2  text-gray-400 hover:text-gray-500"
                        >
                          <img
                            className="w-[20px]"
                            src="/svg/cartblack.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-center">
                        CONGRATS..!! You get free shipping for your first order
                      </p>
                    </div>
                    <hr className="border mt-[5px]" />
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {carts &&
                            carts.length > 0 &&
                            carts?.map((item, index) => {
                              return (
                                <li className="flex py-2">
                                  <div className="flex gap-4">
                                    <div>
                                      <img
                                        className="w-[150px]"
                                        src={item.thumbnail}
                                        alt=""
                                      />
                                    </div>
                                    <div>
                                      <div>
                                        <p className="text-[12px] font-bold">
                                          {item.name}
                                        </p>
                                    
                                      </div>
                                      <div>
                                        <p className="text-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magni!</p>
                                      </div>
                                      <div className="mt-[10px] flex gap-[25px] items-center justify-between ">
                                        <div className="flex gap-[20px] border items-center rounded-md h-[25px] bg-[ #E9EFEE] px-[16px]">
                                          <div>
                                            <img
                                              src="/svg/arrowleft.svg"
                                              alt=""
                                              onClick={() => decerement(item)}
                                            />
                                          </div>
                                          <div>
                                            <p className="text-[15px] font-bold">
                                              1
                                            </p>
                                          </div>
                                          <div>
                                            <img
                                              src="/svg/arrowright.svg"
                                              alt=""
                                              onClick={() => increment(item)}
                                            />
                                          </div>
                                        </div>
                                      <div className="flex gap-4">

                                      <div>
                                        <p className="text-right font-bold">
                                          ${item.price}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-right font-bold line-through">
                                          ${item.previous_price}
                                        </p>
                                      </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div>
                                      <img
                                        src="/svg/cross.png"
                                        alt=""
                                        onClick={() => handleDelete(item.id)}
                                      />
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          {carts.length === 0 && <p className="text-center">Your Cart is empty</p>}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${totalPrice}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <input
                          className="w-full border h-10 rounded-md text-[12px] font-bold pl-3 outline-none"
                          placeholder="Coupon Code"
                          type="text"
                          onChange={handleChange}
                          name="discount"
                          value={input.discount}
                        />
                      </div>
                      <div className="w-full  mt-[8px]">
                        <button
                          type="submit"
                          className="w-full border h-10 rounded-md bg-gray-300 text-[14px] disabled:opacity-25"
                          disabled={input?.discount?.length > 0 ? false : true}
                        >
                          Apply coupon
                        </button>
                      </div>
                    </form>

                    <div className="mt-6">
                      <Link
                        href="/checkout"
                        className="flex items-center justify-center rounded-md md:text-[14px] text-[10px] bg-black border px-6 py-3 text-base font-medium text-white "
                      >
                        PROCEED TO CHECKOUT
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  /* // <div>
    //   <Header />
    //   <div className="lg:mt-[160px] md:mt-[50px] mt-[70px] container m-auto">
    //     <div className=" text-center  p-14">
    //       {carts && carts.length > 0 && ( *
    //         <p className="lg:text-4xl md:text-3xl text-2xl  font-semibold text-[#369688]">
    //           Cart
    //         </p>
    //       )}
    //       {carts && carts.length > 0 && (
    //         <p className="text-center  pt-[20px]">
    //           You are eligible for free shipping!
    //         </p>
    //       )}
    //     </div>
    //     <div className="my-[2%] mb-[100px]">
          {/* <div className="w-[75%] m-auto">
            <div className=" p-5 m-auto flex items-center justify-between border-b mt-[10px]">
              <div>
                <p className="font-semibold text-[15px] text-[#369688]">
                  PRODUCTS
                </p>
              </div>

              <div className="flex gap-[50px] cursor-pointer">
                <div className="flex  items-center font-semibold text-[15px] text-[#369688] w-[150px] justify-center">
                  QUANTITY
                </div>
                <div className=" font-semibold text-[15px] text-[#369688]">
                  REMOVE
                </div>
              </div>
            </div>
           

            {carts &&
              carts.length > 0 &&
              carts.map((items, index) => {
                return (
                  <>
                    <div
                      className="container p-5 m-auto flex items-center justify-between border-b mt-[10px]"
                      key={index}
                    >
                      <div className="flex gap-5 items-center">
                        <div className="w-[100px] bg-[#D7DE26]">
                          <img src={items.image[0]} alt="" />
                        </div>
                        <div>
                          <p className="font-bold">{items.name}</p>
                          <p className="text-[#369688]">{items.tittle}</p>
                          <p className="font-semibold">${items.price}</p>
                        </div>
                      </div>

                      <div className="flex gap-20 cursor-pointer">
                        <div className="flex gap-5  items-center text-[#369688]">
                          {/* <div onClick={()=>increment(items,index)}> */
}
{
  /* <div onClick={() => increment(items, index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </div>
                          {/* </div> */
}
{
  /* <div>{items.quantity}</div>
                          <div onClick={() => decerement(items, index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18 12H6"
                              />
                            </svg>
                          </div>
                        </div> */
}
{
  /* <div className="text-[#369688] font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={() => handleDelete(items)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })} */
}
{
  /* 
            {carts && carts.length > 0 && (
              <div className="mt-[80px]">
                <p className="text-center text-[#369688] font-bold text-[20px]">
                  Subtotal: ${total}
                </p>
                <div className="flex justify-center my-[20px] mb-[120px]">
                  <Link href="/checkout">
                    <button className="px-24 py-2 bg-[#D7DE26] font-semibold">
                      CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {carts && carts.length === 0 && (
            <div className="text-center my-[100px]">
              <p className="lg:text-4xl md:text-3xl text-2xl  font-semibold text-[#369688]">
                Your Cart is empty
              </p>
              <Link href="/cards">
                <button className="px-[50px] mt-[40px] p-2  bg-[#369688] text-white">
                  Continue Shopping
                </button>
              </Link>
            </div> */
  /* )} */
}

//     <div className="overflow-x-auto relative w-[95%] 2xl:w-[65%] m-auto">
//       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
//         {carts && carts.length > 0 && (
//           <thead className="text-xs  text-white h-14 uppercase bg-[#369688]">
//             <tr>
//               <th
//                 scope="col"
//                 className="py-3 px-6 md:w-[70%] md:text-[15px] text-[10px]"
//               >
//                 PRODUCT NAME
//               </th>

//               <th
//                 scope="col"
//                 className="py-3 px-6 md:text-[15px] text-[10px]"
//               >
//                 QUANTITY
//               </th>
//               <th
//                 scope="col"
//                 className="py-3 px-6 md:text-[15px] text-[10px] text-center"
//               >
//                 REMOVE
//               </th>
//             </tr>
//           </thead>
//         )}
//         <tbody>
//           {carts.map((items, index) => {
//             return (
//               <tr className="bg-white border-b ">
//                 <td
//                   scope="row"
//                   className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
//                 >
//                   <div className="flex md:gap-5 gap-3 items-center">
//                     <div className="md:w-[100px] w-[50px] ">
//                       <img
//                         className=" hover:scale-125 transition ease-in-out delay-100 duration-700 "
//                         src={items.image[0]}
//                         alt=""
//                       />
//                     </div>
//                     <div>
//                       <p className="font-bold md:text-[16px] text-[10px] ">
//                         {items.name}
//                       </p>
//                       <p className="text-[#369688] md:text-[16px] md:my-2 text-[10px] hidden md:block">
//                         Lorem ipsum dolor sit amet.
//                       </p>
//                       <p className="font-semibold md:text-[16px] text-[10px]">
//                         ${items.price}
//                       </p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-4 px-6 ">
//                   <div className="flex cursor-pointer  ">
//                     <div className="border flex gap-2 md:gap-4 items-center p-1 md:p-2 ">
//                       <div className="flex gap-5 justify-start items-center text-[#369688]">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           className="md:w-4 md:h-4 w-2 h-2"
//                           onClick={() => increment(items, index)}
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M12 4.5v15m7.5-7.5h-15"
//                           />
//                         </svg>
//                       </div>
//                       <div className="text-[10px] lg:text-[15px]">
//                         {items.quantity}
//                       </div>
//                       <div className="text-[#369688]">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke-width="1.5"
//                           stroke="currentColor"
//                           className="md:w-4 md:h-4 w-2 h-2"
//                           onClick={() => decerement(items, index)}
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M18 12H6"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-4 px-6">
//                   <div className="text-[#369688] font-bold flex justify-center cursor-pointer">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       className="md:w-5 md:h-5 w-4 h-4"
//                       // onClick={() => handleDelete(items)}
//                       onClick={() => handleDelete(items)}
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                       />
//                     </svg>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {carts && carts.length > 0 && (
//         <div className="mt-[80px]">
//           <p className="text-center text-[#369688] font-bold text-[20px]">
//             Subtotal: ${totalPrice}
//           </p>
//           <div className="flex justify-center my-[20px] mb-[120px]">
//             <Link href="/checkout">
//               <button className="px-24 py-2 text-white bg-[#369688] font-semibold">
//                 CHECKOUT
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//       {carts && carts.length === 0 && (
//         <div className="text-center my-[100px]">
//           <p className="lg:text-4xl md:text-3xl text-2xl  font-semibold text-[#369688]">
//             Your Cart is empty
//           </p>
//           <Link href="/cards">
//             <button className="px-[50px] mt-[40px] p-2  bg-[#369688] text-white">
//               Continue Shopping
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
//   <Footer />
// </div>
