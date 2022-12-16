import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cards } from "../../data";
import { addToCarts } from "../../redux/product";

function Cards() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [btnText, setBtnText] = useState(["ADD To Cart", "ADDED To Cart"]);
  const { vapes } = useSelector((state) => state.home);

  useEffect(() => {
    console.log(vapes);
  }, [vapes]);

  const handleAdd = (data) => {
    dispatch(addToCarts(data));
    // router.push({ pathname: "/add_to_cart" });
    // console.log(router.pathname);
  };

  console.log(cards[0].image);
  return (
    <div className="mt-[100px] ">
      <div className="2xl:w-[65%] container  m-auto">
        <h1 className="text-center text-[40px] font-bold text-black">
          Vape Category
        </h1>
        <div className="grid xl:gap-20 gap-12 lg:grid-cols-4 md:grid-cols-2 mt-[28px] justify-center ">
          {cards.slice(0, 4).map((items, index) => {
            return (
              <div className="max-w-sm " key={index}>
                <div className="justify-center flex ">
                  <Link href={`/cards/${items.id}`}>
                    <img
                      className="rounded-t-lg   "
                      src={items.image[0]}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="pt-[15px]">
                  <h1 className="text-[18px] xl:text-[19px] font-extrabold  text-[black] dark:text-white text-center">
                    {items.name}
                  </h1>
                  <h5 className=" text-[14px]  xl:text-[14px]  font-normal  pt-[15px] text-[#535353]  text-center ">
                    {items.title}
                  </h5>
                  <div className="flex justify-center mt-[42px]">
                    <Link
                      href={`${
                        (items.id === 1 && "/delta11") ||
                        (items.id === 2 && "/cards") ||
                        (items.id === 3 && "/masterblend") ||
                        (items.id === 4 && "/hhc")
                      }`}
                      className=" items-center hover:animate-bounce text-[14px] xl:text-[18px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
                      onClick={() => handleAdd(items)}
                    >
                      Get Your Flavour
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
