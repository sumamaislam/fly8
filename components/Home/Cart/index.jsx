import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  sentCoupanRequest,
  setTotalPrice,
  setTotalQuantity,
  updateCart,
} from "../../../redux/product";

export default function Cart({ showCart, setShowCart }) {
  const [coupan, setCoupan] = useState("");
  const dispatch = useDispatch();
  const { carts, totalPrice, coupanData } = useSelector(
    (state) => state.product
  );

  const increment = (items, index) => {
    let update = { ...items };
    update.qty = JSON.parse(update.qty) + 1;
    update.total = update.price * update.qty;
    dispatch(updateCart(update));
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };

  const decerement = (items, index) => {
    const updateVal = { ...items };
    if (updateVal.qty > 1) {
      updateVal.qty = updateVal.qty - 1;
      updateVal.total = updateVal.price * updateVal.qty;
    }
    dispatch(updateCart(updateVal));
  };

  const coupanSubmit = (e) => {
    e.preventDefault();
    console.log(coupan);
    setCoupan("");
    dispatch(sentCoupanRequest(coupan));
  };

  useEffect(() => {
    if (carts) {
      const totalAmount = carts?.reduce((a, v) => a + v.price * v.qty, 0);
      const totalQuantity = carts?.reduce((a, v) => a + v.qty, 0);
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
  return (
    <div>
      <div className=" background: rgba(0, 0, 0, 0.5) z-50 relative">
        <div
          className={`fixed inset-0 overflow-hidden ease-in-out duration-1000  ${
            showCart ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div
            className={`absolute inset-0 overflow-hidden bg-black bg-opacity-75 `}
          >
            <div
              className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 `}
            >
              <div className={`pointer-events-auto w-screen max-w-md `}>
                <div
                  className={`flex h-full flex-col overflow-y-scroll bg-white shadow-xl`}
                >
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start gap-36">
                      <img
                        src="/svg/back.svg"
                        alt=""
                        className="cursor-pointer "
                        onClick={() => setShowCart(false)}
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
                                        <p className="text-[10px]">
                                          Lorem ipsum dolor, sit amet
                                          consectetur adipisicing elit.
                                          Assumenda, magni!
                                        </p>
                                      </div>
                                      <div className="mt-[10px] flex gap-[25px] items-center justify-between ">
                                        <div className="flex gap-[20px] border items-center rounded-md h-[25px] bg-[ #E9EFEE] px-[16px]">
                                          <div className="cursor-pointer">
                                            <img className=""
                                              src="/svg/arrowleft.svg"
                                              alt=""
                                              onClick={() => decerement(item)}
                                            />
                                          </div>
                                          <div>
                                            <p className="text-[15px] font-bold">
                                              {item.qty}
                                            </p>
                                          </div>
                                          <div className="cursor-pointer">
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
                                    <div className="cursor-pointer">
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
                          {carts.length === 0 && (
                            <p className="text-center">Your Cart is empty</p>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${totalPrice}</p>
                    </div>
                    <form onSubmit={coupanSubmit}>
                      <div>
                        <input
                          className="w-full border h-10 rounded-md text-[12px] font-bold pl-3 outline-none"
                          placeholder="Coupon Code"
                          type="text"
                          onChange={(e) => setCoupan(e.target.value)}
                          name="coupan"
                          value={coupan}
                        />
                      </div>
                      <div className="w-full  mt-[8px]">
                        <button
                          type="submit"
                          className="w-full border h-10 rounded-md bg-gray-300 text-[14px] disabled:opacity-25"
                          disabled={coupan.length > 0 ? false : true}
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
  );}
