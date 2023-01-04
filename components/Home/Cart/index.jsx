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
import Router from "next/router";

export default function Cart({ showCart, setShowCart }) {
  const [coupan, setCoupan] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const dispatch = useDispatch();
  const { carts, totalPrice, dataCoupans } = useSelector(
    (state) => state.product
  );

  const increment = (items, index) => {
    // console.log(index);
    if (carts[index]?.stock > carts[index]?.qty) {
      let update = { ...items };
      update.qty = JSON.parse(update.qty) + 1;
      update.total = update.price * update.qty;
      dispatch(updateCart(update));
    }
  };
  const handleCheckout = () => {
    // if (dataCoupans.type === "1" && dataCoupans.type === "0" ){
    //   dispatch(setTotalPrice(newPrice));
    // }
    Router.push("/checkout");
  };

  // console.log("push", dataCoupans);
  // useEffect(() => {
  //   if (coupan.type === "0") {
  //     setNewPrice({})
  //   }
  //   if (coupan.type === "1") {
  //     setNewPrice({})
  //   };
  // }, [coupan]);

  // useEffect(() => {
  //   if (dataCoupans?.type === "0") {
  //     setNewPrice(totalPrice - (totalPrice / 100) * dataCoupans?.price);
  //   }
  //   if (dataCoupans?.type === "1") {
  //     setNewPrice(totalPrice - dataCoupans?.price);
  //   }
  // }, [dataCoupans, totalPrice]);
  // console.log("newPrice", newPrice);

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
      const totalQuantity = carts?.reduce((a, v) => a + JSON.parse(v.qty), 0);
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
    <div className="relative">
      <div className="z-50">
        <div
          className={`${
            showCart
              ? "bg-black z-100 top-0 z-[1] fixed overflow-hidden bg-opacity-75 w-full h-[100vh] min-h-[100%] ease-in-out duration-1000"
              : ""
          }`}
          onClick={() => setShowCart(false)}
        ></div>
        <div
          className={`fixed inset-0 overflow-hidden ease-in-out duration-1000  w-screen max-w-md z-10 ml-auto ${
            showCart ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className={`absolute inset-0 overflow-hidden `}>
            <div
              className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full`}
            >
              <div className={`pointer-events-auto`}>
                <div
                  className={`flex h-full flex-col  max-w-md  w-screen overflow-y-scroll bg-white shadow-xl`}
                >
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
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
                                      <div className="mt-[10px] flex gap-2 md:gap-[25px] items-center justify-between ">
                                        <div className="flex gap-[20px] border items-center rounded-md h-[25px] bg-[ #E9EFEE] px-[16px]">
                                          <div className="cursor-pointer w-[5px] ">
                                            <img
                                              className=""
                                              src="/svg/arrowleft.svg"
                                              alt=""
                                              onClick={() =>
                                                decerement(item, index)
                                              }
                                            />
                                          </div>
                                          <div>
                                            <p className=" font-bold text-[12px] md:text-[16px]">
                                              {item.qty}
                                            </p>
                                          </div>
                                          <div className="cursor-pointer w-[5px]">
                                            <img
                                              src="/svg/arrowright.svg"
                                              alt=""
                                              onClick={() =>
                                                increment(item, index)
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="flex gap-4">
                                          <div>
                                            <p className="text-right font-bold text-[12px] md:text-[16px]">
                                              ${item.price}
                                            </p>
                                          </div>
                                          <div>
                                            <p className="text-right font-bold line-through text-[12px] md:text-[16px]">
                                              ${item.previous_price}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="cursor-pointer w-[30px]">
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
                    {carts && carts.length > 0 ? (
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          {/* {dataCoupans } */}
                          <p>
                            $
                            {/* {dataCoupans && dataCoupans.price
                              ? newPrice
                              : totalPrice} */}
                              {dataCoupans?.type === "0" && totalPrice - (totalPrice / 100) * dataCoupans?.price}
                              {dataCoupans?.type === "1" && totalPrice - dataCoupans?.price}
                              {!dataCoupans?.type && totalPrice}
                          </p>
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
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="mt-6">
                      <Link href="/checkout" className="">
                      <button
                        // onClick={handleCheckout}
                        disabled={carts && carts.length > 0 ? false : true}
                        className="disabled:opacity-25  flex items-center justify-center rounded-md md:text-[14px] text-[9px] bg-black border px-6 py-3 text-base font-medium text-white w-full"
                      >
                        PROCEED TO CHECKOUT
                      </button>
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
}
