import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../../components/common";
import { addtocart } from "../../data";
import { deleteCart, setTotalPrice, setTotalQuantity, updateCart } from "../../redux/product";

export default function index() {
  const [total, setTotal] = useState("0");
  // const [cart, setCart] = useState(addtocart);

  const dispatch = useDispatch();
  const { carts, totalPrice } = useSelector((state) => state.product);
  console.log(carts);

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
      <Header />
      <div className="lg:mt-[160px] md:mt-[50px] mt-[70px] container m-auto">
        <div className=" text-center  p-14">
          {carts && carts.length > 0 && (
            <p className="lg:text-4xl md:text-3xl text-2xl  font-semibold text-[#369688]">
              Cart
            </p>
          )}
          {carts && carts.length > 0 && (
            <p className="text-center  pt-[20px]">
              You are eligible for free shipping!
            </p>
          )}
        </div>
        <div className="my-[2%] mb-[100px]">
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
                          {/* <div onClick={()=>increment(items,index)}> */}
          {/* <div onClick={() => increment(items, index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </div>
                          {/* </div> */}
          {/* <div>{items.quantity}</div>
                          <div onClick={() => decerement(items, index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18 12H6"
                              />
                            </svg>
                          </div>
                        </div> */}
          {/* <div className="text-[#369688] font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
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
              })} */}
          {/* 
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
          /* )} */}

          <div class="overflow-x-auto relative w-[95%] 2xl:w-[65%] m-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              {carts && carts.length > 0 && (
                <thead class="text-xs  text-black h-14 uppercase bg-[#D8DF25]">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 md:w-[70%] md:text-[15px] text-[10px]"
                    >
                      PRODUCT NAME
                    </th>

                    <th
                      scope="col"
                      class="py-3 px-6 md:text-[15px] text-[10px]"
                    >
                      QUANTITY
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 md:text-[15px] text-[10px] text-center"
                    >
                      REMOVE
                    </th>
                  </tr>
                </thead>
              )}
              <tbody>
                {carts.map((items, index) => {
                  return (
                    <tr class="bg-white border-b ">
                      <td
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                      >
                        <div className="flex md:gap-5 gap-3 items-center">
                          <div className="md:w-[100px] w-[50px]  bg-[#D7DE26]">
                            <img
                              className=" hover:scale-125 transition ease-in-out delay-100 duration-700 "
                              src={items.image[0]}
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="font-bold md:text-[16px] text-[10px] ">
                              {items.name}
                            </p>
                            <p className="text-[#369688] md:text-[16px] md:my-2 text-[10px] hidden md:block">
                              Lorem ipsum dolor sit amet.
                            </p>
                            <p className="font-semibold md:text-[16px] text-[10px]">
                              ${items.price}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-6 ">
                        <div className="flex cursor-pointer  ">
                          <div className="border flex gap-2 md:gap-4 items-center p-1 md:p-2 ">
                            <div className="flex gap-5 justify-start items-center text-[#369688]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="md:w-4 md:h-4 w-2 h-2"
                                onClick={() => increment(items, index)}
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </div>
                            <div className="text-[10px] lg:text-[15px]">
                              {items.quantity}
                            </div>
                            <div className="text-[#369688]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="md:w-4 md:h-4 w-2 h-2"
                                onClick={() => decerement(items, index)}
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M18 12H6"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-6">
                        <div className="text-[#369688] font-bold flex justify-center cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="md:w-5 md:h-5 w-4 h-4"
                            // onClick={() => handleDelete(items)}
                            onClick={() => handleDelete(items)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {carts && carts.length > 0 && (
              <div className="mt-[80px]">
                <p className="text-center text-[#369688] font-bold text-[20px]">
                  Subtotal: ${totalPrice}
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
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
